import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wakala-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts: Contact[];
  constructor(private http: HttpClient) {
    this.http.get<Contact[]>('http://localhost:3000/contacts')
      .subscribe(res => this.contacts = res);
  }
}
