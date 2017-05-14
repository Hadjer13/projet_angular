/**
 * Created by rahma on 18/04/2017.
 */

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SourceSite } from './sourceSite';
import {concurrent} from "../gestionConcurrent/concurrent";


@Injectable()
export class SrcSiteService {

  /* private headers = new Headers({'Content-Type': 'application/json'});
   private SrcUrl = 'api/User';  // URL to web api

   constructor(private http: Http) { }

   getSrcs(): Promise<SourceSite[]> {
   return this.http.get(this.SrcUrl)
   .toPromise()
   .then(response => response.json().data as SourceSite[])
   .catch(this.handleError);
   }


   getSrc(id: number): Promise<SourceSite> {
   const url = `${this.SrcUrl}/${id}`;
   return this.http.get(url)
   .toPromise()
   .then(response => response.json().data as SourceSite)
   .catch(this.handleError);
   }

   delete(id: number): Promise<void> {
   const url = `${this.SrcUrl}/${id}`;
   return this.http.delete(url, {headers: this.headers})
   .toPromise()
   .then(() => null)
   .catch(this.handleError);
   }

 /*  create(concurrent_id: number,lien:string,date_ajout:Date): Promise<SourceSite> {
   return this.http
   .post(this.SrcUrl, JSON.stringify({concurrent_id: concurrent_id,lien:lien,date_ajout:date_ajout}), {headers: this.headers})
   .toPromise()
   .then(res => res.json().data as SourceSite)
   .catch(this.handleError);
   }
*/
/*   update(Src:SourceSite): Promise<SourceSite> {
   const url = `${this.SrcUrl}/${Src.id}`;
   return this.http
   .put(url, JSON.stringify(SourceSite), {headers: this.headers})
   .toPromise()
   .then(() => Src)
   .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
   }*/



}


