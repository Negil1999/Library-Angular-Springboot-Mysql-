import { Component, OnInit } from '@angular/core';
// import { OneSignalService } from 'onesignal-ngx';
// import { OneSignal } from 'onesignal-ngx';

import { OneSignal } from 'onesignal-ngx';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit  {
tag=1;
  user: any;
  userId:any;

  constructor(private oneSignal:  OneSignal,
    private cht:ChatServiceService,) {

    window.OneSignal = window.OneSignal || [];

      this.oneSignal.init({
          appId: "5ff0a8e6-7397-41fd-9019-d007cc66c85d",
      });
console.log("init");

}

ngOnInit(): void {
  window.OneSignal = window.OneSignal || [];
  this.CurrentUser();
this.onHandleTag();


}

CurrentUser(){
  this.cht.loadcuruser().subscribe(result=>{
    this.user=result;
    this.userId=this.user.userId
    console.log("rslt",this.user.role)

  })
    

}


onHandleTag() {
  console.log('----------------------------------------------------------');
  this.oneSignal.sendTag("userId", this.userId).then(() => {
    console.log("userid: " + this.userId);
  });
}
}
