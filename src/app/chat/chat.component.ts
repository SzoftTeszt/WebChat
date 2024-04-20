import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  messages:any
  newMessage:any
  user="Attila"
  constructor(private base:BaseService){
    this.base.getMessages().snapshotChanges().pipe(
      map( (ch)=> ch.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      ))
    ).subscribe(
      (adatok)=> this.messages=adatok
    )
  }

  pushMessage(){
    const d = new Date();
    let time = d.toLocaleTimeString();
    let date = d.toLocaleDateString();
    let body:any={
      user:this.user,
      time:date+" "+time,
      text:this.newMessage
    }

    this.base.pushMessage(body).then(
      ()=>this.newMessage=""
    ).catch(
      ()=>console.log("Üzenet feltöltés - Catch")
    )
  }
}
