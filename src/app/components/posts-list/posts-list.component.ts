import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    MatCardModule,
    NavbarComponent
  ],
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {}