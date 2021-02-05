import {NgModule} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card'

@NgModule({
  imports: [MatGridListModule,MatCardModule],
  exports: [MatGridListModule,MatCardModule]
})

export class MaterialModule{}
