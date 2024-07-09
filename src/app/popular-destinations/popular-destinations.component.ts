import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-popular-destinations',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './popular-destinations.component.html',
  styleUrls: ['./popular-destinations.component.css']
})

export class PopularDestinationsComponent {
  destinations = [
    {
      image: '/assets/Venice.jpg',
      title: 'Venice',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/Spain.jpg',
      title: 'Spain',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/spain1.jpg',
      title: 'Spain',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/London.jpg',
      title: 'London',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/Norway.jpg',
      title: 'Norway',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/Norway1.jpg',
      title: 'Norway',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    ,{
      image: '/assets/Switzerland.jpg',
      title: 'Switzerland',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/Stockholm.jpg',
      title: 'Stocholm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/unknown.jpg',
      title: 'Cyprus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
}
