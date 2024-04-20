import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refMessages: AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.refMessages= db.list("messages")
   }

   getMessages(){
    return this.refMessages
   }

   pushMessage(message:any){
    return this.refMessages.push(message)
   }

   saveMessage(key:any,message:any){
    return this.refMessages.update(key, message )
   }

   deleteMessage(key:any){
    return this.refMessages.remove(key)
   }


}
