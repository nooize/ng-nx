import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxOptionsSelectComponent } from './components/nx-options-select/nx-options-select.component';
import { NxSortableDirective } from './components/nx-sortable/nx-sortable.diractive';
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
  ],
  exports: [
    NxSortableDirective,
    NxOptionsSelectComponent
  ],
  declarations: [
    NxSortableDirective,
    NxOptionsSelectComponent,
  ]
})
export class NgNxModule {
}

