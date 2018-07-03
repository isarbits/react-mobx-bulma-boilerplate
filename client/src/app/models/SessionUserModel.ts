import { action, observable } from 'mobx';

export default class SessionUserModel {
  @observable public email?: string;
  @observable public firstname?: string;
  @observable public id?: string;
  @observable public lastname?: string;
  @observable public rights?: string[];
  @observable public role?: string = '';
  @observable public profilePicturePath?: string = null;

  @action public update?(obj: SessionUserModel) {
    return updater.update(this, obj);
  }
}
