class Dog {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log("this is " + this.name + " !")
        console.log("Age is "+ this.age);
    }
    static bark() {
        console.log ("Woof!");
    }
}

const myDog = new Dog("Buster",16);
myDog.introduce();

Dog.bark();