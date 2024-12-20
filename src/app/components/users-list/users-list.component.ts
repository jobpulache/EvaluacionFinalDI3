import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MatCardModule,
    NavbarComponent
  ],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {}