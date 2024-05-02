import { Component } from '@angular/core';
import { SidebarItemsComponent } from './sidebar-items.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarItemsComponent],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

}
