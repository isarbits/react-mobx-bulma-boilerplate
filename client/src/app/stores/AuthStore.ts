import { action, observable } from 'mobx';
import { instance as ajax } from 'app/stores/AjaxService';
import { storage } from 'app/utils/storage';

import SessionModel from 'app/models/SessionModel';
import SessionUserModel from 'app/models/SessionUserModel';

export default class SessionStore {
  @observable public user: SessionUserModel;

  public sendMagicLink(email: string) {
    return ajax.post('auth/magiclink', { email });
  }

  public requestPasswordReset(email: string) {
    return ajax.post('auth/resetpassword', { email });
  }

  public doPasswordReset(uuid: string, password: string) {
    return ajax.post(`auth/resetpassword/${uuid}`, { password });
  }

  public changeUserPassword(oldPassword: string, newPassword: string) {
    return ajax.post(`users/${this.user.id}/changepassword`, { oldPassword, password: newPassword });
  }

  public changeProfilePicture(profilePicture: FormData) {
    return ajax.post(`users/${this.user.id}/profilepicture`, profilePicture)
      .then((res) => {
        this.updateUser(res.user);
      });
  }

  public activateUserAccount(tokenID: string, password: string) {
    return ajax.post(`auth/invitation/${tokenID}`, { password });
  }

  public loginByMagicLink(linkId: string) {
    return ajax.get(`auth/magiclink/${linkId}`).then((res: SessionModel) => {
      this.updateUser(res.user);
      storage.set('sid', res.sid);
    }).catch((err: any) => {
      this.logout();
      throw err;
    });
  }

  public login(email: string, password: string) {
    return ajax.post('auth/login', { email, password }).then((res: SessionModel) => {
      this.updateUser(res.user);
      storage.set('sid', res.sid);
    }).catch((err: any) => {
      this.logout();
      throw err;
    });
  }
  public superlogin(email: string, password: string, emailas: string) {
    return ajax.post('auth/superlogin', { email, password, emailas }).then((res: SessionModel) => {
      this.updateUser(res.user);
      storage.set('sid', res.sid);
    }).catch((err: any) => {
      this.logout();
      throw err;
    });
  }

  @action
  public updateUser(userData: SessionUserModel) {
    this.user = userData;
  }

  @action
  public logout() {
    storage.remove('sid');
    this.user = null;
  }

  public restoreSession(): Promise<SessionUserModel> {
    const sid = storage.get('sid');

    if (!sid) {
      return Promise.reject(new Error('no session token'));
    }

    return ajax.get(`auth/restore/${sid}`).then((res: SessionModel) => {
      this.updateUser(res.user);
      return this.user;
    }).catch((err: any) => {
      this.logout();
      throw err;
    });
  }

  public hasRight?(right: string) {
    return this.user && this.user.rights && this.user.rights.includes(right);
  }
/*
  public get isAdmin() {
    return !this.user.customer && this.hasRight('CAN_MANAGE_CUSTOMER_USERS') || this.hasRight('CAN_MANAGE_PLANTS') || this.hasRight('CAN_MANAGE_VENDORS');
  }

  public get isCustomerAdmin() {
    return this.user.customer != null && this.hasRight('CAN_MANAGE_CUSTOMER_USERS');
  }
*/
}

export const instance = new SessionStore();
