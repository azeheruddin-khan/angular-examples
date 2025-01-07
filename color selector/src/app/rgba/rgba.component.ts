import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rgba',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './rgba.component.html',
  styleUrl: './rgba.component.css'
})
export class RGBAComponent {

  minValue:number=0;
  maxValue:number= 255;
  minAlphaValue:number= 0;
  maxAlphaValue:number= 1;

  redValue:number=0;
  greenValue:number=0;
  blueValue:number=0;
  alphaValue:number = 0.8;
  rgbaColor:string = `rgba(${this.redValue},${this.greenValue},${this.blueValue},${this.alphaValue})`;

  update()
  {
    debugger;
    this.rgbaColor = `rgba(${this.redValue},${this.greenValue},${this.blueValue},${this.alphaValue})`;
  }

  
}
