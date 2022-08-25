import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Todo{
   name: string;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {


  constructor(private firestore: AngularFirestore,) { }

 getTodo(){
    return this.firestore.collection('todo').valueChanges()
 }

 addTodo(todo: Todo){
    return this.firestore.collection('todo').add(todo)
 }

 updateTodo(todo: Todo){
   //  delete todo.name;
     return this.firestore.doc('todo/' + todo.name).update(todo)
 }

 deleteTodo(id: string){
    return this.firestore.doc('todo/' + id ).delete()
 }

}