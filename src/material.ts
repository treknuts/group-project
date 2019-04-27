import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule]
})
export class MaterialModule { }