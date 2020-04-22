import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  is_admin = false;
  current_user: Object;
  full_name = '';

  constructor() {}

  setToken(token: any) {
    localStorage.setItem('TOKEN', token);
  }

  setClient(client: any) {
    localStorage.setItem('CLIENT', client);
  }

  setUid(uid: any) {
    localStorage.setItem('UID', uid);
  }

  getHeader() {
    return {
      'access-token': localStorage.getItem('TOKEN'),
      'client': localStorage.getItem('CLIENT'),
      'uid': localStorage.getItem('UID')
    }
  }

  isLogged() {
    if(this.getCurrentUser() == null){
      this.is_admin = false
    }else{
      this.current_user = this.getCurrentUser()
      this.full_name = `${this.current_user['first_name']} ${this.current_user['middle_name']} ${this.current_user['last_name']}`
      this.is_admin = this.getCurrentUser().admin
    }
    
    return localStorage.getItem('TOKEN') != null;
  }

  setCurrentUser(current_user) {
    localStorage.setItem('CURRENT_USER', JSON.stringify(current_user));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('CURRENT_USER'));
  }

  clearStorage() {
    localStorage.clear();
  }
}
