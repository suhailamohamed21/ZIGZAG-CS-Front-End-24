"use strict";
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}
let test = new Show("Elzero");
console.log(test.title); // Property 'title' does not exist on type 'Show'
test.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(test.title); // Property 'title' does not exist on type 'Show'
