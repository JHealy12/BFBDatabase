Game.MainMenu = function(game){};
//create variables for MainMenu
	var titlescreen;
	var menu_music;
	
Game.MainMenu.prototype = {
//create function
	create:function(game){
	//MenuMusic Setup
        menu_music = this.add.audio('MenuMusic');
        menu_music.play();
	//background image
        var s = game.add.sprite(0, 0, 'menu1');
	//Title Image
        this.createtitle(game,"",400, 150, function(){
            console.log("Not Copyright");
        });
	//button Play
        this.createButton(game,"Play Offline",400, 300, 80, 40, function(){
			//menu_music.stop();
            this.state.start('JS/Player1Select');
        });
		/*//button Play
        this.createButton(game,"Play Online",400, 350, 80, 40, function(){
			//menu_music.stop();
            this.state.start('JS/Tanks');
        });*/
	//button Controls
        this.createButton(game,"Controls",400, 400, 80, 40, function(){
			//menu_music.stop();
            this.state.start('JS/ControlPage');
        });
	//button Ships
		this.createButton(game,"Ships",400, 450, 80, 40, function(){
			//menu_music.stop();
            this.state.start('JS/AboutPage');
        });
    },//end create
//update function
    update:function(game){

    },//end update
//createButton function
    createButton:function(game,string,x,y,w,h,callback){
	//create button image
        var button1 = game.add.button(x,y,'button',callback,this,2,1,0);
	//set button anchor
        button1.anchor.setTo(0.5,0.5);
	//set button width and height
        button1.width = w;
        button1.height = h;
	//create button string
        var txt = game.add.text(button1.x, button1.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
	//set string anchor
        txt.anchor.setTo(0.5,0.5);
    },//end createButton
//createtitle function
    createtitle:function(game,string,x,y,callback){
	//create button image
        var button2 = game.add.button(x,y,'titlescreen',callback,this,2,1,0);
	//set button anchor
        button2.anchor.setTo(0.5,0.5);
	//create button string
        var title = game.add.text(button2.x, button2.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
	//set string anchor
        title.anchor.setTo(0.5,0.3);
    },//end createtitle
};//end
