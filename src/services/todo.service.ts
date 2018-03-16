import { TodoItem } from '../interfaces/todo.interface';

export class TodoService {
  todolist: TodoItem[] = [];

  // adds a new item to the list
  addItem( newItem: string ){
    this.todolist.push({
      id: this.todolist.length,
      text: newItem,
      done: false
    })
  }

  // removes an item from the list
  removeItem( itemToRemove: TodoItem ){
    const position = this.TodoItem.findIndex( (todoitem: TodoItem) => {
      return todoitem.id == itemToRemove.id;
    });
    this.TodoItem.splice(position, 1);
  }

  // removes all items that have their "done" property set to true
  removeDoneItems(){
    let newtodolist = [];
    for( let item in this.todolist ){
      if( itemsAreDone(this.todolist[item]) == false ){
        newtodolist.push( this.todolist[item] );
      }
    }
    this.todolist = newtodolist;
  }

  // returns the list so you can use it
  getItems(){
    return this.todolist.slice();
  }

  // checks to see if any item in the list is done
  itemsAreDone() {
    let done = false;
    for( let item in this.todolist ){
      if( this.todolist[item].done == true ){
        done = true;
        break;
      } // end of if
    } // end of for loop
    return done;
    }

}
