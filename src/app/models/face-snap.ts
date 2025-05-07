import { WritableSignal } from '@angular/core';

export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public likes: WritableSignal<number>
  ) {}
}
