class TelephoneNumber {
    _officeAreaCode: number;
    _officeNumber: number;

    get officeAreaCode()            { return this._officeAreaCode; }
    set officeAreaCode(arg: number) { this._officeAreaCode = arg; } 

    get officeNumber()            { return this._officeNumber; }
    set officeNumber(arg: number) { this._officeNumber = arg; } 
}

export default TelephoneNumber;