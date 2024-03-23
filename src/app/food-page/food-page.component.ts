import { Component, OnInit } from '@angular/core';
import {Food} from "../shared/models/Food";
import {ActivatedRoute} from "@angular/router";
import {FoodService} from "../services/food/food.service";
import {StarRatingComponent} from "ng-starrating";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Food;
  constructor(private activatedRoad:ActivatedRoute, private foodService:FoodService) {
    {
      activatedRoad.params.subscribe((params => {
        if(params['id']) {
          this.food = foodService.getFoodByID(params['id']);
        }
      }))
    }
  }

  ngOnInit(): void {
  }

  onRate($event: { oldValue: number; newValue: number; starRating: StarRatingComponent }) {

  }
}
