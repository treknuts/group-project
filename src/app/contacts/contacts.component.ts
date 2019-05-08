import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contacts } from './contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {



  @Input('input') firstFormGroup: FormGroup;
  isOptional = false;
  contacts: Contacts[];

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(data => {this.contacts = data;});
    
  }

}
