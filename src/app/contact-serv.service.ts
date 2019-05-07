import { Injectable } from '@angular/core';
import { Contact } from './contact';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServService {

    contacts: Observable<Contact[]>;
    contactCollection: AngularFirestoreCollection;

    contactDoc: AngularFirestoreDocument<Contact[]>;

    constructor(public afs: AngularFirestore) {
      this.contacts = afs.collection('Software Contacts').valueChanges();
      this.contactCollection = this.afs.collection('Software Contacts');
     }

     getContacts(): Observable <Contact[]> {

      console.log(this.contacts);
      return this.contacts;
     }

}
