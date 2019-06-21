Game.LevelMenu = function(game){};
//create variables for LevelMenu
	var titlescreen;
	var level1complete = 1;
	var level2complete = 1;
	var level3complete = 1;

Game.LevelMenu.prototype = {
//create function
    create:function(game){
	//create menu
        var s = game.add.sprite(0, 0, 'menu1');
	
        this.createtitle(game,"",400, 150, function(){
			menu_music.stop();
            this.state.start('JS/MainMenu');
        });
	
        this.createButton1(game,"Level 1",190, 400, 200, 150, function(){
            this.state.start('JS/Level1_V2');
            menu_music.mute = true;
        });
        this.createButton2(game,"Level 2",405, 400, 200, 150, function(){
            this.state.start('JS/Level2_V2');
            menu_music.mute = true;
        });
        this.createButton3(game,"Level 3",620, 400, 200, 150, function(){
            this.state.start('JS/Level3_V2');
            menu_music.mute = true;
        });
    },//end create
//update function
	update:function(game){
    },//end update
//createButton1 function
	createButton1:function(game,string,x,y,w,h,callback){
        if(sessionStorage.getItem("level1comp") == 0) {
            level1complete = 0;
        }
        if(level1complete == 1) {
            var button1 = game.add.button(x, y, 'Btn_Level1', callback, this, 2, 1, 0);
        }
        else{
            button1 = game.add.button(x, y, 'buttoncomp', callback, this, 2, 1, 0);
        }
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;

        var txt1 = game.add.text(button1.x, button1.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        txt1.anchor.setTo(0.5,0.5);
    },//end createButton1
//createButton2 function
    createButton2:function(game,string,x,y,w,h,callback){
        if(sessionStorage.getItem("level2comp") == 0) {
            level2complete = 0;
        }
        if(level2complete == 1) {
            var button2 = game.add.button(x, y, 'Btn_Level2', callback, this, 2, 1, 0);
        }
        else{
            button2 = game.add.button(x, y, 'buttoncomp', callback, this, 2, 1, 0);
        }
        button2.anchor.setTo(0.5,0.5);
        button2.width = w;
        button2.height = h;

        var txt2 = game.add.text(button2.x, button2.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        txt2.anchor.setTo(0.5,0.5);
    },//end createButton2
//createButton3 function
    createButton3:function(game,string,x,y,w,h,callback){
        if(sessionStorage.getItem("level3comp") == 0) {
            level3complete = 0;
        }
        if(level3complete == 1) {
            var button3 = game.add.button(x, y, 'Btn_Level3', callback, this, 2, 1, 0);
        }
        else{
            button3 = game.add.button(x, y, 'buttoncomp', callback, this, 2, 1, 0);
        }
        button3.anchor.setTo(0.5,0.5);
        button3.width = w;
        button3.height = h;

        var txt3 = game.add.text(button3.x, button3.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        txt3.anchor.setTo(0.5,0.5);
    },//end createButton3
//createtitle function
    createtitle:function(game,string,x,y,callback){
        var button2 = game.add.button(x,y,'titlescreen',callback,this,2,1,0);

        button2.anchor.setTo(0.5,0.5);


        var title = game.add.text(button2.x, button2.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        title.anchor.setTo(0.5,0.3);
    }//end createtitle
};//end
