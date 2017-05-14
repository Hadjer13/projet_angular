/**
 * Created by rahma on 13/04/2017.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { configRS } from './configRS';

@Injectable()
export class ConfigRSService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private ConfigUrl = 'api/ConfigRS';  // URL to web api

  constructor(private http: Http) { }
/*
  getConfigs(): Promise<configRS[]> {
    return this.http.get(this.ConfigUrl)
      .toPromise()
      .then(response => response.json().data as configRS[])
      .catch(this.handleError);
  }


  getConfigRS(id: number): Promise<configRS> {
    const url = `${this.ConfigUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as configRS)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.ConfigUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(nomRS:string,appId:string,appSecret:string,timer:number): Promise<configRS> {
    return this.http
      .post(this.ConfigUrl, JSON.stringify({nomRs:nomRS,appId:appId,appSecret:appSecret,timer:timer}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as configRS)
      .catch(this.handleError);
  }

  update(config: configRS): Promise<configRS> {
    const url = `${this.ConfigUrl}/${config.id}`;
    return this.http
      .put(url, JSON.stringify(configRS), {headers: this.headers})
      .toPromise()
      .then(() => config)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }*/
}


