module.exports = class Calculations {
    constructor() {
        this.x = '',
            this.y = '',
            this.type = '',
            this.history = [],
            this.total = ''
    }
    operations() {
        let xValue = Number(this.x);
        let yValue = Number(this.y);
        if (this.type == "+") {
            this.total = xValue + yValue;
        }
        else if (this.type == "-") {
            this.total = xValue - yValue;
        }
        else if (this.type == "/") {
            this.total = xValue / yValue;
        }
        else if (this.type == "*") {
            this.total = xValue * yValue;
        }
        this.history.push(`${this.x} ${this.type} ${this.y} = ${this.total}`);
    }
}
