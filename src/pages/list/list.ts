import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';
import { TodoService } from '../../services/todo.service';
import { TodoItem } from '../../interfaces/todo.interface';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public settings: SettingsService,
    public todoService: TodoService,
    public alertCtrl: AlertController,
  ) {
  }

  listname: string;
  theme: string;

  ionViewWillEnter(){
    this.listname = this.settings.getListName();
    this.theme = this.settings.getTheme();
    this.todolist = this.todoService.getItems();
  }

  addItem() {
    let prompt = this.alertCtrl.create({
      title: "Add new Item",
      message: "Enter a new To-Do List item.",
      inputs: [
        {
          name: "title",
          placeholder: "New Item"
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Add",
          handler: data => {
            this.todoService.addItem(data.title);
          }
        }
      ]
    });
    prompt.present();
    this.todolist = this.todoService.todolist;
    console.log(this.todolist);
  }

  isDone( item: TodoItem ){
    this.todolist = todoService.todolist[item].done = true;
  }

}


/*export class HomePage {

  zipcode: number;
  weather: Observable<any>;
  time: string;
  conditions: string;
  temp: number;
  location: string;

  constructor( public http: HttpClient, public alertCtrl: AlertController ) {
    this.zipcode = 83501;
    this.getWeather();
  }
  // http://api.apixu.com/v1/current.json?key=2cf37d6dd57140e398a192959180503&q=Paris

  getWeather() {
    this.weather = this.http.get("http://api.apixu.com/v1/current.json?key=2cf37d6dd57140e398a192959180503&q=" + this.zipcode );
    this.weather.subscribe(
      data => {
        this.time = data.current.last_updated;
        this.conditions = data.current.condition.text;
        this.temp = data.current.temp_f;
        this.location = data.location.name;
      },
      error => {
        const alert = this.alertCtrl.create({
          title: "Error!",
          message: "This zipcode you entered isn't valid.",
          buttons: ['OK']
        })
        alert.present();
      }
    );
  }

  changeLocation() {
    const prompt = this.alertCtrl.create({
      title: "Change Location",
      inputs: [{
        name: 'zipcode',
        placeholder: 'Zip Code'
      }],
      buttons: [{
        text: "Cancel"
      },{
        text: "Save",
        handler: data => {
          this.zipcode = data.zipcode;
          this.getWeather();
        }
      }]
    });
    prompt.present();
  }

}*/
