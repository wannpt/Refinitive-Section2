import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'refin-Q1';

  num: number = 0;
  validateType: string = 'isPrime';
  result: boolean = false;

  ValidateInput(): void{
    this.num = Math.round(this.num)
    if(this.num < 0)
      this.num = 1;

    console.log('running')
  }

  Calculate(): void{
    this.ValidateInput();
    if(this.validateType === 'isPrime'){
      //find is prime
      this.result = this.isPrime();
      console.log('isPrime')
    }
    else if(this.validateType === 'isFibo'){
      //find is Fibo
      this.result = this.isFibo();
      console.log('isFibo')
    }
    else console.log('error occurs in Calculate()')
  }

  isPrime(): boolean{
    let temp = 5;

    if(this.num <= 3)
    return this.num > 1;
  
    else if((this.num%2 === 0) || (this.num%3 === 0))
    return false
  
    while(Math.pow(temp,2) <= this.num){
      if(this.num % temp === 0 || this.num % (temp+2) === 0)
        return false
      temp += 6
    }

    return true;
  }

  isFibo(): boolean{
    let currentNum = 1;
    let previousNum = 0;
    let temp = 0;
    while(previousNum < this.num){
      if(this.num === currentNum)
        return true
      
      temp = currentNum;
      currentNum += previousNum
      previousNum = temp;
    }
    return false;
  }
}
