import { computed, observable, runInAction } from 'mobx';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { storage } from 'app/utils/storage';
import env from 'app/env';

import { instance as notification } from 'app/utils/notification';

export default class AjaxService {
  @observable
  private pendingRequestCount: number = 0;

  @computed
  public get hasPendingRequests(): boolean {
    return this.pendingRequestCount > 0;
  }

  private get _hostUrl(): string {
    return env.apiUrl || '';
  }

  public apiUrl(url: string): string {
    return `${this._hostUrl}/api/${url}`;
  }

  public getSessionId(): string {
    return storage.get('sid');
  }

  private async call(method: string, url: string, data: any = null) {
    runInAction(() => { this.pendingRequestCount++; });

    const headers: any = {
      'x-auth-token': this.getSessionId()
    };

    if (data instanceof FormData) {
      headers['Content-Type'] = 'multipart/form-data';
      // requestBody = body;
    } else {
      headers['Content-Type'] = 'application/json';
      // requestBody = JSON.stringify(body);
    }

    return axios({
      method,
      url: this.apiUrl(url),
      headers,
      data
    }).then((res: AxiosResponse) => {
      runInAction(() => { this.pendingRequestCount--; });
      return res.data;
    }).catch((e: AxiosError) => {
      runInAction(() => { this.pendingRequestCount--; });
      console.log(e);

      if (e && e.response && e.response.data && e.response.data.message) {
        const message = e.response.data.message;
        if (message !== 'session not found') {
          notification.error(message);
        }
      }

      throw e;
    });
  }

  public get(url: string) {
    return this.call('GET', url);
  }

  public post(url: string, data?: any) {
    return this.call('POST', url, data);
  }

  public put(url: string, data?: any) {
    return this.call('PUT', url, data);
  }

  public delete(url: string, data?: any) {
    return this.call('DELETE', url, data);
  }
}

export const instance = new AjaxService();
