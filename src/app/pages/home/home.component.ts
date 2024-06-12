import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NewHospitalComponent} from "../new-hospital/new-hospital.component";
import {RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NewHospitalComponent,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
