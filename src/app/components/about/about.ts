import { Component } from '@angular/core';
import { ABOUT_DATA } from '../../data/about';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly about = ABOUT_DATA;
}
