import TelephoneNumber from "./TelephoneNumber";

class Person {
    _telephoneNumber: TelephoneNumber;

    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode()            { return this._telephoneNumber.officeAreaCode; } 
    set officeAreaCode(arg: number) { this._telephoneNumber.officeAreaCode = arg; }
}