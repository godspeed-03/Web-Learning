class car  {

   constructor(name, propter){
    this.name = name;
    this.proper = propter
   }


   info () {
    console.log(`${this.name}'s info is ${this.proper}`)
   }

}

let carinfo = new car('satyam', 'student')

console.log(carinfo.info())

class other extends car {
    super(name){
        this.name=name
    }
    constructor(otherp){
        this.other= otherp
    }
}