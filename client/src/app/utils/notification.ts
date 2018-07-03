import * as Noty from 'noty';

const NotyTypeProxy: any = Noty; // tslint:disable-line variable-name

const timeout = 5000;

class Notification {
  public success = (msg: string) => {
    new NotyTypeProxy({
      type: 'success',
      text: msg,
      timeout
    }).show();
  }

  public info = (msg: string) => {
    new NotyTypeProxy({
      type: 'info',
      text: msg,
      timeout
    }).show();
  }

  public warn = (msg: string) => {
    new NotyTypeProxy({
      type: 'warning',
      text: msg,
      timeout
    }).show();
  }

  public error = (msg: string) => {
    new NotyTypeProxy({
      type: 'error',
      text: msg,
      timeout
    }).show();
  }
}

export const instance = new Notification();
