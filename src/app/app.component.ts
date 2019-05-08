import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLinear= true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder){}

  ngOnInit(){
    this.firstFormGroup = this._formBuilder.group({
      contactCtrl: ['', Validators.required]
    });
    
    this.secondFormGroup = this._formBuilder.group({
      fnameCtrl: ['', Validators.required],
      lnameCtrl: ['', Validators.required],
      officeCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required],
      softwareCtrl: ['', Validators.required],
      fundNumCtrl: ['', Validators.required],
      MachineNumCtrl: ['', Validators.required],
    });

  }
}



