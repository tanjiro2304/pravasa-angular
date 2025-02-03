import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-roadways',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './roadways.component.html',
  styleUrl: './roadways.component.css'
})
export class RoadwaysComponent {

}
