import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'Create New Customer',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'View all Customers',  icon:'ni-bullet-list-67 text-red', class: '' },
    //{ path: '/pendingpayments', title: 'View all Pending Payments',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/paymenthistory', title: 'Payment History',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/activitylog', title: 'Customer Activity Log',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/customer-activity', title: 'Record Gym Attendance',  icon: 'ni-tv-2 text-primary', class: '' }
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    //Condition to restrict other side menu actions for customer activity page
    if(this.router.url == '/customer-activity'){
      this.menuItems = ROUTES.filter(menuItem => menuItem.path == '/customer-activity');
    }
    else{
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
