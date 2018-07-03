import { action, observable } from 'mobx';
import SessionUserModel from 'app/models/SessionUserModel';

export default class SessionModel {
  @observable public sid: string;
  @observable public user: SessionUserModel;

  @action public update?(obj: SessionModel) {
    return updater.update(this, obj);
  }
}
