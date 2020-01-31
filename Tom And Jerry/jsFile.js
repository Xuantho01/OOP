function Jerry(name,weight,speed){
   this.name = name;
   this.weight = weight;
   this.speed = speed;

   this.Life = function(){
     return true;
   };
   this.die = function(){
       return false;
   };
    this.sound = function() {
        alert("chít, chít");
    };
    this.decrease = function(){
        if(tom.eatJerry()){
            this.weight--;
        }
    };
}

function Tom(name,weight,speed){
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.Sound = function(){
        alert("Meo, Meo")
    };
    this.takeJerry = function(){
        if(jerry.speed < tom.speed){
            return true;
        }
        else{
            return false;
        }
    };
    this.eatJerry = function(){
        if(jerry.Life() && this.takeJerry()){
            this.weight++;
            alert(":))");
            return true;
        }
        else{
            alert(":((");
            return false;
        }
    };
    this.getWeight = function(){
        return this.weight;
    }
}

let jerry = new Jerry("JERRY",10,20);
let tom = new Tom("TOM",40,30);
