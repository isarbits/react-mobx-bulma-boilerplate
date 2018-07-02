import { action, observable } from 'mobx';

export default class TextInputModel {
    @observable public touched?: boolean;
    @observable public value?: string;

    @action public setTouched(touched: boolean) {
        this.touched = touched;
    }
}
