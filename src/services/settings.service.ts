export class SettingsService {
  listName: string;
  theme: string;

  constructor(){
    this.listName = "Mike's To-Do List";
    this.theme = "light";
  }

  setListName(newName:string){
    this.listName = newName;
  }
  setTheme(newTheme:string){
    this.theme = newTheme;
  }

  getListName(){
    return this.listName;
  }

  getTheme(){
    return this.theme;
  }

}
