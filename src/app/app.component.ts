import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PasswordService } from './services/password.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private password_service: PasswordService,//service where functionality for password generation is created.
  ){

  }
  password: string = '';

  passwordLength: number = 10  //default password length is 10
  includeAlphabets: boolean = true;
  includeNumbers: boolean = false;
  includeSpecialChar: boolean = false;
  

  generatePassword(){
    //if password length is 0 show error.
    if(this.passwordLength<1) {window.alert('password should be greater than 0 and less than 25')}
    this.password = this.password_service.generatePassword(this.passwordLength,this.includeAlphabets,this.includeNumbers,this.includeSpecialChar)
  }
}
