import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css'],
  animations: [
    trigger('imageAnimation', [
      transition('* => *', [
        style({ transform: 'scale(0.5)' }),
        animate('100ms ease-in-out', style({ transform: 'scale(1)' })),
        animate('100ms ease-in-out', style({ transform: 'translateX(-10px)' })),
        animate('100ms ease-in-out', style({ transform: 'translateX(10px)' })),
        animate('100ms ease-in-out', style({ transform: 'translateX(0px)' })),
      ]),
    ]),
    // trigger('imageAnimation2', [
    //   transition('* => *', [
    //     style({ transform: 'translateX(0)' }),
    //     animate('500ms ease-in-out', style({ transform: 'translateX(-10px)' })),
    //     animate('500ms ease-in-out', style({ transform: 'translateX(10px)' })),
    //     animate('500ms ease-in-out', style({ transform: 'translateX(0)' })),
    //   ]),
    // ]),
  ],
})
export class HowItWorksComponent {
  imgUrls = [
    "https://sportshub.cbsistatic.com/i/2022/11/23/718ba55c-dda9-4840-849b-4a816b0585e0/bleach-thousand-year-blood-war-ichigo-loss-cliffhanger.jpg",
    "https://staticg.sportskeeda.com/editor/2022/09/a2ab1-16630067142505-1920.jpg",
    "https://twinfinite.net/wp-content/uploads/2022/12/Bleach-TYBW-Ichigo-Facing-Down-Quincy-While-Protecting-Nel-Screenshot-1.jpg?fit=1200%2C675"
  ]
  imgSrc = "https://sportshub.cbsistatic.com/i/2022/11/23/718ba55c-dda9-4840-849b-4a816b0585e0/bleach-thousand-year-blood-war-ichigo-loss-cliffhanger.jpg"

  active = 1;

}
