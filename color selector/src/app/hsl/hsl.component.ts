import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hsl',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './hsl.component.html',
  styleUrl: './hsl.component.css'
})
export class HSLComponent {

  minHueValue:number = 0;
  maxHueValue:number = 360;

  minPercentageValue:number = 0;
  maxPercentageValue:number = 100;

  hueValue:number=0;
  saturationValue:number = 0;
  lightnessValue:number = 0;

  hslColor:string = `hsl(${this.hueValue},${this.saturationValue}%,${this.lightnessValue}%)`;

  update()
  {
    this.hslColor = `hsl(${this.hueValue},${this.saturationValue}%,${this.lightnessValue}%)`;
  }



}
