import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Software } from './software';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {
  softwareDB: Observable<Software[]>;
  softwareCollection: AngularFirestoreCollection;
  softwareDoc: AngularFirestoreDocument<Software[]>;

  constructor(private db: AngularFirestore) {
    this.softwareDB = db.collection<Software>('Software').valueChanges();
    this.softwareCollection = this.db.collection('Software');
  }

  getSoftware(): Observable<Software[]>  {
    return this.softwareDB;
  }
}
