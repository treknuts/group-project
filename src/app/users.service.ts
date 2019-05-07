import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersDB: Observable<User[]>;
  usersCollection: AngularFirestoreCollection<User>;
  usersDoc: AngularFirestoreDocument<User[]>;

  constructor(private asf: AngularFirestore) {
    this.usersDB = asf.collection<User>('Users').valueChanges();
    this.usersCollection = this.asf.collection('Users');
  }

  addUser(user: User) {
    this.usersCollection.add(user);
  }
}
