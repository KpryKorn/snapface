import {
  Component,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  userHasLiked!: WritableSignal<boolean>;

  ngOnInit(): void {
    this.userHasLiked = signal(false);
  }

  toggleLike() {
    if (this.userHasLiked()) {
      this.faceSnap.likes.update((v) => v - 1);
      this.userHasLiked.set(false);
    } else {
      this.faceSnap.likes.update((v) => v + 1);
      this.userHasLiked.set(true);
    }
  }
}
