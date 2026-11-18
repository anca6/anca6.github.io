import { Component } from '@angular/core';
import { ThreeScene } from '../three-scene/three-scene';

@Component({
  imports: [ThreeScene],
  selector: 'app-intro',
  styleUrl: './intro.scss',
  templateUrl: './intro.html',
})
export class Intro {}
