Game.AboutPage = function(game){};

var titlescreen;

Game.AboutPage.prototype = {
    create: function (game) {
        var s = game.add.sprite(0, 0, 'menu1');
        this.createtitle(game, "", 400, 100, 300, 200, function () {
        });
        this.createAbout(game, "Ships", 400, 200, 120, 40, function () {
        });
		this.createAbout(game, "Small", 150, 250, 120, 40, function () {
        });
		this.createAbout(game, "Medium", 400, 250, 120, 40, function () {
        });
		this.createAbout(game, "Large", 650, 250, 120, 40, function () {
        });
		this.createSloop(game,"Sloop","Speed:3  Hull: 1",150,355,150,75, function (){
		});
		this.createCaravel(game,"Caravel","Speed:3  Hull: 1",150,505,150,75, function (){
		});
		this.createBarrack(game,"Barrack","Speed:2  Hull: 2",400,355,150,75, function (){
		});
		this.createBrigantine(game,"Brigantine","Speed:2  Hull: 2",400,505,150,75, function (){
		});
		this.createManOWar(game,"Man'O'War","Speed:1  Hull: 3",650,355,150,75, function (){
		});
		this.createFrigate(game,"Frigate","Speed:1  Hull: 3",650,505,150,75, function (){
		});
        this.createBack(game, "Back", 100, 155, 80, 40, function () {
			menu_music.stop();
            this.state.start('JS/MainMenu');
        });
    },
    update: function (game) {
	},
	createAbout: function (game, string, x, y, w, h, callback) {
        var button1 = game.add.button(x,y,'button',callback,this,2,1,0);
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        var txt1 = game.add.text(button1.x, button1.y, string, {font: "14px Earth", fill: "#fff", align: "centre"});
        txt1.anchor.setTo(0.5, 0.5);
    },
	createSloop: function (game, string, string2, x, y, w, h, callback) {
        var button2 = game.add.button(x,y,'button',callback,this,2,1,0);
		button2.anchor.setTo(0.5,0.5);
        button2.width = w +15;
        button2.height = h+60;
        var button1 = game.add.button(x,y,'Sloop',callback,this,2,1,0);
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
		var txt1 = game.add.text(button1.x, button1.y - 40, string, {font: "18px Earth", fill: "#fff", align: "centre"});
		var txt2 = game.add.text(button1.x, button1.y + 50, string2, {font: "18px Earth", fill: "#fff", align: "centre"});
        txt1.anchor.setTo(0.5, 0.5);
		txt2.anchor.setTo(0.5, 0.5);
    },
	createCaravel: function (game, string,string2, x, y, w, h, callback) {
        var button2 = game.add.button(x,y,'button',callback,this,2,1,0);
		button2.anchor.setTo(0.5,0.5);
        button2.width = w +15;
        button2.height = h+60;
		var button1 = game.add.button(x,y,'Caravel',callback,this,2,1,0);
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        var txt1 = game.add.text(button1.x, button1.y - 40, string, {font: "18px Earth", fill: "#fff", align: "centre"});
        var txt2 = game.add.text(button1.x, button1.y + 50, string2, {font: "18px Earth", fill: "#fff", align: "centre"});
        txt1.anchor.setTo(0.5, 0.5);
		txt2.anchor.setTo(0.5, 0.5);
    },
	createBarrack: function (game, string,string2, x, y, w, h, callback) {

		var button2 = game.add.button(x,y,'button',callback,this,2,1,0);
		button2.anchor.setTo(0.5,0.5);
        button2.width = w +15;
        button2.height = h+60;
        var button1 = game.add.button(x,y,'Barrack',callback,this,2,1,0);
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
		var txt1 = game.add.text(button1.x, button1.y - 40, string, {font: "18px Earth", fill: "#fff", align: "centre"});
        var txt2 = game.add.text(button1.x, button1.y + 50, string2, {font: "18px Earth", fill: "#fff", align: "centre"});
        txt1.anchor.setTo(0.5, 0.5);
		txt2.anchor.setTo(0.5, 0.5);
    },
	createBrigantine: function (game, string,string2, x, y, w, h, callback) {
        var button2 = game.add.button(x,y,'button',callback,this,2,1,0);
		button2.anchor.setTo(0.5,0.5);
        button2.width = w +15;
        button2.height = h+60;
		var button1 = game.add.button(x,y,'Brigantine',callback,this,2,1,0);
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        var txt1 = game.add.text(button1.x, button1.y - 40, string, {font: "18px Earth", fill: "#fff", align: "centre"});
        var txt2 = game.add.text(button1.x, button1.y + 50, string2, {font: "18px Earth", fill: "#fff", align: "centre"});
        txt1.anchor.setTo(0.5, 0.5);
		txt2.anchor.setTo(0.5, 0.5);
    },
	createManOWar: function (game, string,string2, x, y, w, h, callback) {
        var button2 = game.add.button(x,y,'button',callback,this,2,1,0);
		button2.anchor.setTo(0.5,0.5);
        button2.width = w +15;
        button2.height = h+60;
        var button1 = game.add.button(x,y,'ManOWar',callback,this,2,1,0);
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
		var txt1 = game.add.text(button1.x, button1.y - 40, string, {font: "18px Earth", fill: "#fff", align: "centre"});
        var txt2 = game.add.text(button1.x, button1.y + 50, string2, {font: "18px Earth", fill: "#fff", align: "centre"});
        txt1.anchor.setTo(0.5, 0.5);
		txt2.anchor.setTo(0.5, 0.5);
    },
	createFrigate: function (game, string,string2, x, y, w, h, callback) {
        var button2 = game.add.button(x,y,'button',callback,this,2,1,0);
		button2.anchor.setTo(0.5,0.5);
        button2.width = w +15;
        button2.height = h+60;
        var button1 = game.add.button(x,y,'Frigate',callback,this,2,1,0);
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
		var txt1 = game.add.text(button1.x, button1.y - 40, string, {font: "18px Earth", fill: "#fff", align: "centre"});
        var txt2 = game.add.text(button1.x, button1.y + 50, string2, {font: "18px Earth", fill: "#fff", align: "centre"});
        txt1.anchor.setTo(0.5, 0.5);
		txt2.anchor.setTo(0.5, 0.5);
    },
    createControls: function (game, string, x, y, w, h, callback) {
        var button1 = game.add.button(x,y,'button',callback,this,2,1,0);
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        var txt1 = game.add.text(button1.x, button1.y, string, {font: "14px Earth", fill: "#fff", align: "centre"});
        txt1.anchor.setTo(0.5, 0.5);
    },

    createBack: function (game, string, x, y, w, h, callback) {
        var button1 = game.add.button(x,y,'button',callback,this,2,1,0);
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        var txt1 = game.add.text(button1.x, button1.y, string, {font: "14px Earth", fill: "#fff", align: "centre"});
        txt1.anchor.setTo(0.5, 0.5);
    },
	
    createtitle:function(game,string,x,y,w,h,callback){
        var button2 = game.add.button(x,y,'titlescreen',callback,this,2,1,0);
        button2.anchor.setTo(0.5,0.5);
		button2.width=w;
		button2.height=h;
        var title = game.add.text(button2.x, button2.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        title.anchor.setTo(0.5,0.3);
    }
};
