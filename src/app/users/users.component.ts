import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SoftwareService } from '../software.service';
import { UsersService } from '../users.service';
import { Order } from './order';
import { User } from './user';
import { Software } from '../software';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  secondFormGroup: FormGroup;
  isOptional = false;
  software: Software[];
  first: string;
  last: string;
  office: string;
  phone: string;
  fund: number;
  machineNumber: number;
  selectControl: string;
  softSelected: Software[] = [];
  usersOnOrder: User[] = [];


  constructor(private formBuilder: FormBuilder,
              private softwareService: SoftwareService,
              private userService: UsersService) { }

  ngOnInit() {
    this.softwareService.getSoftware().subscribe(data => {this.software = data;});

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getSoft(): Software{
    for(var x = 0; x < this.software.length; x++){
      if(this.software[x].name == this.selectControl){
        console.log(this.software[x].name);
        return this.software[x];
      }
    }
  }

  onSubmit() {
    var user: User = {firstName: ((document.getElementById("fname") as HTMLInputElement).value),
                      lastName: ((document.getElementById("lname") as HTMLInputElement).value),
                      office: ((document.getElementById("office") as HTMLInputElement).value),
                      phoneNumber: ((document.getElementById("phone") as HTMLInputElement).value),
                      fundNumber: Number(((document.getElementById("fund") as HTMLInputElement).value)),
                      machineInv: Number(((document.getElementById("invNum") as HTMLInputElement).value))};

    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.office);
    console.log(user.phoneNumber);
    console.log(user.fundNumber);
    console.log(user.machineInv);

    this.userService.addUser(user);

    this.softSelected.push(this.getSoft());
    console.log(this.softSelected[0].name);
    this.usersOnOrder.push(user);

    this.first = '';
    this.last = '';
    this.office = '';
    this.phone = '';
    this.fund = null;
    this.selectControl = '';
  }
}
