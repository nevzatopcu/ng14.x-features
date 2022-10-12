import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cat-image',
  template: `
    <img
      ngSrc="hermes2.jpeg"
      width="1791"
      height="1008"
      priority
      ngSrcset="100w, 200w, 1000w, 2000w"
    />
  `,
  standalone: true,
  imports: [NgOptimizedImage],
  providers: [provideImgixLoader('https://aurora-project.imgix.net')],
})
export class CatImageComponent {}
