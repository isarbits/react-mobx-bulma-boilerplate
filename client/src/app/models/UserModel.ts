import CustomerModel from 'models/CustomerModel';
import { action, observable } from 'mobx';

import { instance as updater } from 'util/objectUpdater';
import IUpdateable from 'domain/IUpdateable';

export default class UserModel implements IUpdateable<UserModel> {
  @observable public id?: string = null;
  @observable public firstname?: string = '';
  @observable public lastname?: string = '';
  @observable public email?: string = '';
  @observable public password?: string = '';
  @observable public role?: string = '';
  @observable public active?: boolean = false;
  @observable public createdAt?: Date;
  @observable public plants?: any = [];
  @observable public customer?: CustomerModel = null;
  @observable public salesforceContactId?: string = null;

  @action public update?(obj: UserModel) {
    return updater.update(this, obj);
  }

  @action public handleUserPlants? = (plantID: string) => {
    const index = this.plants.indexOf(plantID);

    if (index > -1) {
      this.plants.splice(index, 1);
    } else {
      this.plants.push(plantID);
    }
  }
}
