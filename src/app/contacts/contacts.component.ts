import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ContactServService} from '../contact-serv.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  firstFormGroup: FormGroup;
  isOptional = false;

  contacts: Contact[] = [];

  constructor(private formBuilder: FormBuilder, private conService: ContactServService) { }

  ngOnInit() {
    this.conService.getContacts().subscribe(data => {this.contacts = data;});
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
