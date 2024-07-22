import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UnsplashService } from '../unsplash.service';
import { GooglePlacesService } from '../google.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-popular-destinations',
  standalone: true,
  imports: [CommonModule,NgStyle], 
  templateUrl: './popular-destinations.component.html',
  styleUrls: ['./popular-destinations.component.css']
})
export class PopularDestinationsComponent implements OnInit {
  destinations: any[] = [];

  constructor(
    private unsplashService: UnsplashService,
    private googlePlacesService: GooglePlacesService
  ) {}

  ngOnInit() {
    // Replace '37.7749,-122.4194' with the location you want to search for
    const location = '37.7749,-122.4194'; // Example location (San Francisco)
    
    forkJoin({
      unsplash: this.unsplashService.getPopularPlaces(),
      googlePlaces: this.googlePlacesService.getPopularPlaces(location)
    }).subscribe(
      ({ unsplash, googlePlaces }) => {
        // Combine data from both APIs
        this.destinations = googlePlaces.results.map((place: { name: any; vicinity: any; }, index: string | number) => ({
          title: place.name,
          description: place.vicinity,
          image: unsplash.results[index]?.urls.small || 'default-image-url', // Fallback image
        }));
      },
      error => {
        console.error('Error fetching destinations:', error);
      }
    );
  }
}

/* 
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
    },
    {
      image: '/assets/Switzerland.jpg',
      title: 'Switzerland',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/Stockholm.jpg',
      title: 'Stockholm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/assets/unknown.jpg',
      title: 'Cyprus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]; */
