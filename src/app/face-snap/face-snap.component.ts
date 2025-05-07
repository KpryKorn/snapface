import { Component, OnInit, signal, WritableSignal } from '@angular/core';

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
  likes!: WritableSignal<number>;
  imageUrl!: string;
  userHasLiked!: WritableSignal<boolean>;

  ngOnInit(): void {
    this.title = 'New York Trip !';
    this.description = 'My NY Trip !';
    this.createdAt = new Date();
    this.likes = signal(0);
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.userHasLiked = signal(false);
  }

  like() {
    this.likes.update((v) => v + 1);
    this.userHasLiked.set(true);
  }

  dislike() {
    this.likes.update((v) => v - 1);
    this.userHasLiked.set(false);
  }
}
