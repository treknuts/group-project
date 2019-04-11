import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule { }