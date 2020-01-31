
function Apple(){
    this.weight = 10;
    this.decrease = function(){
     if(this.weight > 0){
         this.weight--;
     }
     else{
         console.log("This apple no weight");
     }
    };
    this.isEmpty = function(){
      if(this.weight > 0){
          return false;
      }
      else{
          return true;
      }
    };
    this.getWeight = function(){
       return this.weight;
    };
}

function Human(name,gender,weight){
    this.name = name;
    if(gender == "Male" || gender == "male" || gender == "M" || gender == "m"){
        this.gender = "male";
    }
    else if(gender == "Female" || gender == "female" || gender == "F" || gender == "f"){
        this.gender = "female";
    }
    else{
        this.gender = "input type not true";
    }
    this.weight = weight;

    this.checkApple = function(apple){
        if(!apple.isEmpty()){
            console.log(this.name = ": This apple can be eat");
            return true;
        }
        else{
            console.log(this.name +": This apple is empty");
            return false;
        }
    };
    this.eat = function(apple){
     if(this.checkApple(apple)){
         apple.decrease();
         this.increase();
         console.log(this.name + ": So good");
     }
     else{
         console.log(this.name + ": nothing to eat!");
     }
    };
    this.increase = function(){
      this.weight++;
    };
    this.say = function(){
        console.log(this.name + "Hello!");
    };
    this.getName = function(){
        return this.name;
    };
    this.getWeight = function(){
        return this.weight;
    };
    this.getGender = function(){
        return this.gender;
    }
}

let apple = new Apple();
let adam = new Human('adam','male',70);
let eva = new Human('eva','female',25);
adam.eat(apple);
adam.getWeight();
adam.checkApple(apple);