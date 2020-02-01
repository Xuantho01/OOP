function Remote(code,value,volume,status){
    this.code = code;
    this.value = value;
    this.volume = volume;
    this.status = status;

    this.setChannel = function(value){
        this.value = value;
    };
    this.getChannel = function(value){
         return this.value;
    };

    this.volumeIncrease = function(){
         this.volume++;
    };
    this.volumeDecrease = function(){
        this.volume--;
    };
    this.getVol = function () {
         return this.volume;
    };
    this.power = function(status){
        if(this.status == "OFF"){
            return this.status = "ON";
        }
        else {
            return this.status = "OFF";
        }
    };
    this.getPower = function(){
        return this.status;
    }
}
function Tivi(){
   // this.status = 'OFF';

    this.getChannel = function(){
        return remote.getChannel();
    };

    this.getVolume = function(){
        return remote.getVol();
    };

    this.getPower = function(){
        return remote.getPower();
    }
}
let remote = new Remote(5,5,0,'OFF');
// console.log(remote.getchannel());
// //remote.setChannel(10);
// console.log(remote.getchannel());
let tivi = new Tivi();
