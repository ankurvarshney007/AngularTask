import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.scss']
})
export class NavBarComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
