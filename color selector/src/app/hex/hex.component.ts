import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hex',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './hex.component.html',
  styleUrl: './hex.component.css'
})
export class HEXComponent implements OnInit{

  sequence:string[] = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

  hexValues : string[]=[];

  minValue:number = 0;
  maxValue:number = 0;
  redValue:number = 0;
  greenValue:number = 0;
  blueValue:number = 0;

  redColorValue:string = '00';
  greenColorValue:string = '00';
  blueColorValue:string = '00';

  hexColor:string = `#${this.redColorValue}${this.greenColorValue}${this.blueColorValue}`;



  ngOnInit() 
  {
    debugger;
    this.createHEXValue();
    this.minValue = 0;
    this.maxValue = this.hexValues.length-1;
  }

  createHEXValue()
  {
      this.sequence.forEach(firstSequence => {
        this.sequence.forEach(secondSequence => {
          this.hexValues.push(`${firstSequence}${secondSequence}`);      
        });      
      });    
      debugger;
  }

  update()
  {
    debugger;
    this.redColorValue = this.hexValues[this.redValue];
    this.greenColorValue = this.hexValues[this.greenValue];
    this.blueColorValue = this.hexValues[this.blueValue];
    this.hexColor = `#${this.redColorValue}${this.greenColorValue}${this.blueColorValue}`;

  
  }

}
