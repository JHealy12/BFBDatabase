Game.ControlPage = function(game){};

var titlescreen;

Game.ControlPage.prototype = {
    create: function (game) {
        var s = game.add.sprite(0, 0, 'menu1');
        this.createtitle(game, "", 400, 150, function () {
        });
        this.createAbout(game, "Controls", 400, 300, 120, 40, function () {
        });
		this.createAbout(game, "Player 1", 200, 350, 120, 40, function () {
        });
        this.createControls(game, "W - Move forward", 200, 400 , 200, 40, function () {
        });
        this.createControls(game, "A - Rotate Left", 200, 450 , 200, 40, function () {
        });
        this.createControls(game, "D - Rotate Right", 200, 500, 200, 40, function () {
        });
        this.createControls(game, "Q - Fire Cannon", 200, 550, 200, 40, function () {
        });
		this.createAbout(game, "Player 2", 600, 350, 120, 40, function () {
        });
		this.createControls(game, "Up - Move forward", 600, 400 , 200, 40, function () {
        });
        this.createControls(game, "Left - Rotate Left", 600, 450 , 200, 40, function () {
        });
        this.createControls(game, "Right - Rotate Right", 600, 500, 200, 40, function () {
        });
        this.createControls(game, "P - Fire Cannon", 600, 550, 200, 40, function () {
        });
        this.createBack(game, "Back", 400, 500, 80, 40, function () {
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
	
    createtitle:function(game,string,x,y,callback){
        var button2 = game.add.button(x,y,'titlescreen',callback,this,2,1,0);
        button2.anchor.setTo(0.5,0.5);
        var title = game.add.text(button2.x, button2.y, string, {font:"14px Earth", fill:"#fff", align:"centre"});
        title.anchor.setTo(0.5,0.3);
    }
};
