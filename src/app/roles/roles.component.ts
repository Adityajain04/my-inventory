import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatTable} from "@angular/material/table";

import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { Role } from './role';
import {RoleDialogComponent} from '../role-dialog/role-dialog.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  popoverTitle = 'Remove this role';
  popoverMessage = 'Are you sure?';
  cancelClicked = false;

  roles = [];
  displaySpiner = true;
  pageSize = 5;
  currentPage = 0;
  totalSize = this.roles.length;
  columnsToDisplay = ['id', 'name', 'action']

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(
    private router: Router,
    private api: ApiService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private user: UserService) { }

  ngOnInit(): void {
    if(this.user.isLogged()){
      console.log(this.user.getHeader())
      this.api.get_data("admin/roles.json")
        .subscribe((data) => {
          if(data['status'] == "ok"){
            data['results'].map(role => this.roles.push(role));
            this.totalSize = this.roles.length;
            this.displaySpiner = false;
          }
        })
    }else{
      this.toastr.error("You are not authorized.");
      this.router.navigate(['home']);
    }
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%'
    /** dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    }; */
    
    const dialogRef = this.dialog.open(RoleDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
          if(data != ''){
            this.api.post_data("admin/roles.json", data)
              .subscribe(role => {
                if(role['status'] == "ok"){
                  this.toastr.success("You have successfully added the role.")
                  this.roles.push(role['results']);
                  this.roles = this.roles.filter(role => role.id != 0);
                  this.totalSize = this.roles.length;
                }
              })
          }
        }
    );    
  }

  destroy(id) {
    this.api.delete_data(`admin/roles/${id}.json`)
      .subscribe((data) => {
        if(data['status'] == "ok"){
          this.roles = this.roles.filter(role => role.id != id);
          this.totalSize = this.roles.length;
          this.toastr.success("You have successfully removed the role.")
        }
      })
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.roles.slice(start, end);
    this.roles = part;
  }
}
