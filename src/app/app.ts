import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Intro } from './components/intro/intro';
import { Portfolio } from './components/portfolio/portfolio';
import { Experience } from './components/experience/experience';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  //imports: [RouterOutlet],
  imports: [
    Header, Intro, Portfolio, Experience, About, Contact, Footer
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
