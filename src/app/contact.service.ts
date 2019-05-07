import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Contacts } from './contacts/contacts';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactDB: Observable<Contacts[]>;
  softwareCollection: AngularFirestoreCollection;
  softwareDoc: AngularFirestoreDocument<Contacts[]>;

  constructor(private db: AngularFirestore) {
    this.contactDB = db.collection<Contacts>('Software Contacts').valueChanges();
    this.softwareCollection = this.db.collection('Software Contacts');
  }

  getContacts(): Observable<Contacts[]>  {
    return this.contactDB;
  }
}
