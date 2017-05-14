/**
 * Created by rahma on 18/04/2017.
 */
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import {SourceRS} from './sourceRS';
import {SourceRSComponent} from './sourceRS.component'


@Component({
  selector: 'confirm-dialog',
  template: `
        <p>{{ message }}</p>
        <button type="button" md-raised-button 
           (click)="delete(SourceRS); $event.stopPropagation()">Confirmer</button>
        <button type="button" md-button 
            (click)="dialogRef.close()">Annuler</button>
    `,
})
export class ConfirmDialogS {


  public message: string;

  constructor(public dialogRef: MdDialogRef<ConfirmDialogS>) {

  }
}
