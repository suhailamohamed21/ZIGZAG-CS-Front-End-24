class Show {
    constructor (private _title: string) {
        
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
}
}

let test = new Show("Elzero");

  console.log(test.title); // Property 'title' does not exist on type 'Show'
  test.title = "Osama"; // Property 'title' does not exist on type 'Show'
  console.log(test.title); // Property 'title' does not exist on type 'Show'