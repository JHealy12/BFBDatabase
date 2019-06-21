Game.PlayerSelectOnline = function(game){};
//create variables for LevelMenu
var titlescreen;

var ShipClass = 0;


Game.PlayerSelectOnline.prototype = {
//create function
    create:function(game){
        //create menu
        var s = game.add.sprite(0, 0, 'menu1');

        this.createtitle(game,"Player Ship Selector",400, 130, function(){
            menu_music.stop();
            this.state.start('JS/MainMenu');
        });

        this.createButton1(game,"",190, 360, 200, 150, function(){
            ShipClass = 1;
            sessionStorage.setItem("ShipClass", ShipClass);
            this.state.start('JS/LevelMenuOnline');
            //menu_music.mute = true;
        });
        this.createButton2(game,"",405, 360, 200, 150, function(){
            ShipClass = 2;
            sessionStorage.setItem("ShipClass", ShipClass);
            this.state.start('JS/LevelMenuOnline');
            //menu_music.mute = true;
        });
        this.createButton3(game,"",620, 360, 200, 150, function(){
            ShipClass = 3;
            sessionStorage.setItem("ShipClass", ShipClass);
            this.state.start('JS/LevelMenuOnline');
            //menu_music.mute = true;
        });
        this.createButton4(game,"",190, 520, 200, 150, function(){
            ShipClass = 4;
            sessionStorage.setItem("ShipClass", ShipClass);
            this.state.start('JS/LevelMenuOnline');
            //menu_music.mute = true;
        });
        this.createButton5(game,"",405, 520, 200, 150, function(){
            ShipClass = 5;
            sessionStorage.setItem("ShipClass", ShipClass);
            this.state.start('JS/LevelMenuOnline');
            //menu_music.mute = true;
        });
        this.createButton6(game,"",620, 520, 200, 150, function(){
            ShipClass = 6;
            sessionStorage.setItem("ShipClass", ShipClass);
            this.state.start('JS/LevelMenuOnline');
            //menu_music.mute = true;
        });
    },//end create
//update function
    update:function(game){
    },//end update
//createButton1 function
    createButton1:function(game,string,x,y,w,h,callback){
        //if(sessionStorage.getItem("level1comp") == 0) {

        var button1 = game.add.button(x, y, 'SloopBtn', callback, this, 2, 1, 0);

        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;

        var txt1 = game.add.text(button1.x, button1.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        txt1.anchor.setTo(0.5,0.5);
    },//end createButton1
//createButton2 function
    createButton2:function(game,string,x,y,w,h,callback){
        var button2 = game.add.button(x, y, 'CaravelBtn', callback, this, 2, 1, 0);

        button2.anchor.setTo(0.5,0.5);
        button2.width = w;
        button2.height = h;

        var txt2 = game.add.text(button2.x, button2.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        txt2.anchor.setTo(0.5,0.5);
    },//end createButton2
//createButton3 function
    createButton3:function(game,string,x,y,w,h,callback){
        var button3 = game.add.button(x, y, 'BarrackBtn', callback, this, 2, 1, 0);

        button3.anchor.setTo(0.5,0.5);
        button3.width = w;
        button3.height = h;

        var txt3 = game.add.text(button3.x, button3.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        txt3.anchor.setTo(0.5,0.5);
    },//end createButton3
    //createButton4 function
    createButton4:function(game,string,x,y,w,h,callback){
        var button4 = game.add.button(x, y, 'BrigantineBtn', callback, this, 2, 1, 0);

        button4.anchor.setTo(0.5,0.5);
        button4.width = w;
        button4.height = h;

        var txt4 = game.add.text(button4.x, button4.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        txt4.anchor.setTo(0.5,0.5);
    },//end createButton4
//createtitle function
    //createButton5 function
    createButton5:function(game,string,x,y,w,h,callback){
        var button5 = game.add.button(x, y, 'FrigateBtn', callback, this, 2, 1, 0);

        button5.anchor.setTo(0.5,0.5);
        button5.width = w;
        button5.height = h;

        var txt5 = game.add.text(button5.x, button5.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        txt5.anchor.setTo(0.5,0.5);
    },//end createButton5
    //createButton6 function
    createButton6:function(game,string,x,y,w,h,callback){
        var button6 = game.add.button(x, y, 'ManOWarBtn', callback, this, 2, 1, 0);

        button6.anchor.setTo(0.5,0.5);
        button6.width = w;
        button6.height = h;

        var txt6 = game.add.text(button6.x, button6.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        txt6.anchor.setTo(0.5,0.5);
    },//end createButton6
    createtitle:function(game,string,x,y,callback){
        var button2 = game.add.button(x,y,'titlescreen',callback,this,2,1,0);

        button2.anchor.setTo(0.5,0.5);


        var title = game.add.text(button2.x, button2.y, string, {font:"26px Earth", fill:"#ffffff", align:"centre"});
        title.anchor.setTo(0.5,-3.5);
    }//end createtitle

};//end