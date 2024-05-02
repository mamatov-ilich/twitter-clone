import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarItems } from '../../interface';

@Component({
  selector: 'app-sidebar-items',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar-items.component.html',
  styles: ``,
})
export class SidebarItemsComponent {
  items: Array<SidebarItems> = [
    {
      label: 'Home',
      route: '/',
      icon: 'home',
    },
    {
      label: 'Notifications',
      route: '/notifications',
      icon: 'notifications',
    },
  ];
}
