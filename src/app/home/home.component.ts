import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;

  constructor(private dishService: DishService,
    private promotionServive: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe((dish) => this.dish = dish,
      errmess => this.dishErrMess = <any>errmess);
    this.promotionServive.getFeaturedPromotion()
      .subscribe((promotion) => this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
      .subscribe ((leader) => this.leader = leader);
      
  }

}
