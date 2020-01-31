function switchButton(status){
    this.status = status;

    this.switchOn = function(lamp){
        this.status = true;
        lamp.turnOn();
    };
    this.switchOff = function(lamp){
      this.status = false;
      lamp.turnOff();
    };
}


function electricLamp(status){
    this.status = status;

    this.turnOn = function(){
        this.status = true;
        alert("On");
    };
    this.turnOff = function(){
        this.status = false;
        alert("Off");
    }
}

