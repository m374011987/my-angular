import { MyComponent } from './../myComponent';
import { HeroService } from './../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent extends MyComponent implements OnInit {
  hero: Hero;

  constructor(
    private HeroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
    super('app-hero-detail');
  }

  ngOnInit(): void {
    this.speak();
    this.getHero();
  }
  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.HeroService.getHero(id).subscribe(one => this.hero = one);
  }
  goBack(){
    this.location.back();
  }

}
