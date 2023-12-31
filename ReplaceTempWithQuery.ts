class Order {
    _quantity: number;
    _item: number;

    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get basePrice() {
        return this._quantity * this._item;
    }

    get discountFactor() {
        var discountFactor = 0.98;
        if (this.basePrice > 1000) discountFactor -= 0.03;
        return discountFactor;
    }

    get price() {
        return this.basePrice * this.discountFactor;
    }
}