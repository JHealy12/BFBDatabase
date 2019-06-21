

var Game = {};

Game.Boot = function(game){

};

Game.Boot.prototype = {
    init:function(){

        this.input.maxPointers = 1;

        this.stage.disableVisibilityChange = true;
    },

    preload:function(){
        this.load.image('preloaderBar', 'Assets/Images/starry-night-1164868.jpg')
    },

    create:function(){

        this.state.start('JS/Preloader');
    }
};