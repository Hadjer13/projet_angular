
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {MdButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import {UserComponent} from  './gestionUtilisateu/utilisateur.component';
import {ConfirmDialog} from'./gestionConcurrent/confirmation.component';
import {DialogsService} from './gestionConcurrent/confirmation.service';
import {DialogSService} from './gestionSourceRS/confirmation.service';
import {ConcurrentComponent} from './gestionConcurrent/concurrent.component';
import {ConcurrentDetailComponent} from './gestionConcurrent/ConcDetails';
import {SourceRSComponent} from './gestionSourceRS/sourceRS.component';
import {SrcRSService} from './gestionSourceRS/sourceRS.service';
import {DialogService} from  './gestionUtilisateu/confirmation.service';
import {ConfirmDialogU} from './gestionUtilisateu/confirmation.component';
import {ConfirmDialogS} from './gestionSourceRS/confirmation.component';
import {ConcService} from './gestionConcurrent/concurrent.service';
import {MotCleComponent} from './GestionMotCle/motCle.component';
import {motCleService} from './GestionMotCle/motCle.service';
import {SourceSiteComponent} from './gestionSourceSite/SourceSite.component';
import {ConfigSiteComponent} from'./ConfigSite/configSite.component';
import {ConfigSiteService} from './ConfigSite/configSite.service';
import {ConfigRSComponent} from './ConfigRS/configRS.component';
import {ConfigRSService} from './ConfigRS/configRS.service'
import {SrcSiteService} from './gestionSourceSite/sourceSite.service';
//import {Validators} from '@angular/forms';
import { UserService }   from './gestionUtilisateu/utilisateur.service';
import {UtilisateurDetailComponent} from './gestionUtilisateu/utilisateurDetails';
import {forEach} from "@angular/router/src/utils/collection";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UtilisateurDetailComponent,
    ConcurrentComponent,
    SourceRSComponent,
    ConfirmDialog,
    ConfirmDialogU,
    MotCleComponent,
    ConfigRSComponent,
    ConfigSiteComponent,
    ConfirmDialogS,
    SourceSiteComponent,
    ConcurrentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  //  Validators,
    HttpModule,
    MdButtonModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [UserService,ConcService,DialogsService ,DialogService,DialogSService,motCleService,SrcRSService,ConfigRSService,SrcSiteService,ConfigSiteService],

  entryComponents: [
    ConfirmDialog,ConfirmDialogU,ConfirmDialogS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
