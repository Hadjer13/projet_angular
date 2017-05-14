/**
 * Created by rahma on 13/04/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { configRS }          from './configRS';
import { ConfigRSService }         from './configRS.service';
@Component({
  selector: 'Config',
  templateUrl: 'configRS.component.html',
  styleUrls: [ 'configRS.component.css' ]
})

export class ConfigRSComponent implements OnInit {
  myconfigRS: configRS[];
  selectedconfig: configRS;

  constructor(private configService: ConfigRSService,
              private router: Router) {
  }

  /*
   getconfigRSs(): void {
   this.configService
   .getConfigs()
   .then(myconfigRS => this.myconfigRS = myconfigRS);

   }

   add(nomRS:string,appId:string,appSecret:string,timer:number): void {
   nomRS = nomRS.trim();
   appId = appId.trim();
   appSecret = appSecret.trim();
   timer=timer;
   if (!nomRS && !appId && !appSecret && !timer) { return; }
   this.configService.create(nomRS,appId,appSecret,timer)
   .then(configRS => {
   this.myconfigRS.push(configRS);
   this.selectedconfig = null;
   });
   }


   delete(configRS: configRS): void {
   this.configService
   .delete(configRS.id)
   .then(() => {
   this.myconfigRS = this.myconfigRS.filter(h => h !== configRS);
   if (this.selectedconfig === configRS) { this.selectedconfig = null; }
   });
   }*/

  ngOnInit(): void {
    /* this.getUsers();*/
  }
}






