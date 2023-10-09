class TelephoneNumber {
    _areaCode: number;
    _number: number;

    get areaCode()            { return this._areaCode; }
    set areaCode(arg: number) { this._areaCode = arg; } 

    get number()              { return this._number; }
    set number(arg: number)   { this._number = arg; } 

    get telephoneNumber()     { return `(${this.areaCode} ${this.number})`; }

    toString() { return `(${this.areaCode}) ${this.number}`; }
}

export default TelephoneNumber;