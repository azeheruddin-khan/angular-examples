import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hsla',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './hsla.component.html',
  styleUrl: './hsla.component.css'
})
export class HSLAComponent {

  minHueValue:number = 0;
  maxHueValue:number = 360;

  minPercentageValue:number = 0;
  maxPercentageValue:number = 100;

  hueValue:number=0;
  saturationValue:number = 0;
  lightnessValue:number = 0;

  minAlphaValue:number= 0;
  maxAlphaValue:number= 1;
  alphaValue:number = 0.8;

  hslaColor:string = `hsla(${this.hueValue},${this.saturationValue}%,${this.lightnessValue}%,${this.alphaValue})`;

  update()
  {
    debugger;
    this.hslaColor = `hsla(${this.hueValue},${this.saturationValue}%,${this.lightnessValue}%,${this.alphaValue})`;
  }

}
