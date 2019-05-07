import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [MatButtonModule, 
    MatTabsModule, 
    MatStepperModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatListModule],
  exports: [MatButtonModule, 
    MatTabsModule, 
    MatStepperModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatListModule]
})
export class MaterialModule { }