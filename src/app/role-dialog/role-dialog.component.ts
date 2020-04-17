import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.css']
})
export class RoleDialogComponent implements OnInit {
  
  name: string;
  displaySpiner = true
  constructor(private dialogRef: MatDialogRef<RoleDialogComponent>) {}

  ngOnInit() {
    this.displaySpiner = false;
  }

  save() {
    this.dialogRef.close({role: {name: this.name}});
  }

  close() {
    this.dialogRef.close();
  }

}
