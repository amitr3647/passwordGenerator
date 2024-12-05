import { Injectable } from '@angular/core';
import { password_alphabets, password_numbers, password_specialChars } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  generatePassword(passwordLength: number,isAlphabets:boolean,isNumber: boolean,isSpecialChar: boolean){
    let totalCharacters = '';//totalCharacters is combination of all string, alphabets and special char depending upon our requirement
    if(isAlphabets){
      totalCharacters+= password_alphabets;
    }
    if(isNumber){
      totalCharacters+=password_numbers;
    }
    if(isSpecialChar){
      totalCharacters+=password_specialChars;
    }
    //our required password 
    let password = '';
    for(let i = 0;i<passwordLength;i++){
      const randomNumber = Math.floor(Math.random()*totalCharacters.length);
    password+=totalCharacters[randomNumber];
    }
    return password;
      }
}
