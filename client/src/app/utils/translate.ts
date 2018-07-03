import en from 'app/i18n/en';

class Translate {

  public todo(str: string) {
      return (`<span class="todo">${ str }</span>`);
  }

  public t() {
    return en;
  }

}

const instance = new Translate();
const { todo, t } = instance;

export { todo, t };
