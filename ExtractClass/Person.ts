import TelephoneNumber from "./TelephoneNumber";

class Person {
    _telephoneNumber: TelephoneNumber;

    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode()            { return this._telephoneNumber.areaCode; } 
    set officeAreaCode(arg: number) { this._telephoneNumber.areaCode = arg; }

    get officeNumber()              { return this._telephoneNumber.number; }
    set officeNumber(arg: number)   { this._telephoneNumber.number = arg; }

    get telephoneNumber()           { return this._telephoneNumber.toString(); }
}