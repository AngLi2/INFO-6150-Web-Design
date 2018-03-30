class Dog {
   name:string;
   constructor(name:string) {
      this.name = name
   }
   bark():void {
      console.log("I am "+this.name)
   }
}
var dog = new Dog("Husky");
dog.bark()
