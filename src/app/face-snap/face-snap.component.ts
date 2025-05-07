import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css',
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  likes!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'New York Trip !';
    this.description = 'My NY Trip !';
    this.createdAt = new Date();
    this.likes = 3;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  onAddLike() {
    this.likes++;
  }
}
