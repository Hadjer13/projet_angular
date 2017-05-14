/**
 * Created by rahma on 16/04/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {SourceSite}          from './sourceSite';
import { SrcSiteService }         from './sourceSite.service';
import {concurrent} from '../gestionConcurrent/concurrent';
import {ConcurrentComponent} from '../gestionConcurrent/concurrent.component';



@Component({
  selector: 'sourceSite',
  templateUrl: 'sourceSite.component.html',
  styleUrls: ['sourceSite.component.css']
})

export class SourceSiteComponent implements OnInit {

  mysourceSite :SourceSite[];
  selectedSourceS: SourceSite;

  constructor( //private sourceService: SrcSiteService,
              private router: Router) {
  }


 /*  getSrcs(): void {
   this.sourceService
   .getSrcs()
   .then(mysourceSite => this.mysourceSite = mysourceSite);

   }

 /*  add(concurrent_id: number,url:string,date_ajout:Date): void {
   concurrent_id = concurrent_id;
   lien = lien.trim();
   date_ajout=date_ajout;
   if (!concurrent  && !lien && !date_ajout) { return; }
   this.sourceService.create(concurrent_id,lien,date_ajout)
   .then(source => {
   this.mysourceSite.push(source);
   this.selectedSource = null;
   });
   }


   delete(source: SourceSite): void {
   this.sourceService
   .delete(source.id)
   .then(() => {
   this.mysourceSite = this.mysourceSite.filter(h => h !== sourceSite);
   if (this.selectedSourceS === sourceSite) { this.selectedSourceS= null; }
   });
   }*/

  ngOnInit(): void {
    /* this.getUsers();*/
  }

  onSelect(source: SourceSite): void {
    this.selectedSourceS = source;
  }


}



