/**
 * Created by rahma on 18/04/2017.
 */
import { Observable } from 'rxjs/Rx';
import { ConfirmDialogS } from './confirmation.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogSService {

  constructor(private dialog: MdDialog) { }

  public confirm( message: string): Observable<boolean> {

    let dialogRef: MdDialogRef<ConfirmDialogS>;

    dialogRef = this.dialog.open(ConfirmDialogS);

    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
