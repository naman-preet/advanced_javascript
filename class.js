//classes and objects
//objects are a collection of properties and methods.
class ClassName {
    constructor(prop1, prop2) {
        //this is used to declare as class variable.
        //and after = gives parameter or argument variable.
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
let obj=new ClassName("arg1","arg2");
console.log(obj.prop1); //arg1
console.log(obj.prop2); //arg2
//This keyword refers to the obj it belongs to, so it is first property of the instance of the className.
class Dog{
    constructor(dogname,weight,color,bread){
        this.dogname=dogname;
        this.weight=weight;
        this.color=color;
        this.bread=bread;
    }
}
let dog=new Dog("Javascript",2.4,"brown","labrador");
console.log(dog.dogname);
console.log(dog.weight);
console.log(dog.color); 
console.log(dog.bread); 
//constructor:convention to start with capital letter.
class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
let p=new Person("PAL","BHARDWAJ");
console.log(p.firstname);
console.log(p.lastname); 
console.log("hi",p.firstname,p.lastname);
//Function:when defining these methods inside the class, we don't use the function keyword.
class person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet() {
        console.log("Hi There! I'm", this.firstname);
    }
    compliment(name,object)  {
        return "thst's a wonderful "+object+" "+name;
}
}
let compliment=person.compliment("harry","hat");
console.log(compliment);
