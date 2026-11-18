import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../data/contact';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly socialLinks = SOCIAL_LINKS;
}
