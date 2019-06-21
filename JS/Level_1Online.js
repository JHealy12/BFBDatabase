var PhaserShipGame = PhaserShipGame || {};
Game.PhaserShipGame = function(game){};
//create variables for level1
	var map;
	var score;
	var scorelivesdeduct;
	var scorehealthdeduct;
	
	var layer;
	var player;
	var health1 = 100;
	var p1HealthText;
	var ShipClass1 = 0;
	var startPlayerx = 150;
	var startPlayery = 10;
	var cursors;
	var bullet;
	var weapon;
	var scoreText;
	var GameMusic;
	var damageSprite;
	var p1Lives = 3;

Game.PhaserShipGame.prototype = {
//create function
    create: function (game) {
		score = 0;
		scorehealthdeduct = 0;
		scorelivesdeduct = 0;
	//audio and background
        GameMusic = this.add.audio('GameMusic');
		CannonBoom = this.add.audio('CannonBoom');
        GameMusic.play();
        GameMusic.loopFull();
        this.stage.backgroundColor = '#3A5963';
        this.physics.startSystem(Phaser.Physics.ARCADE);
	//map
        map = this.add.tilemap('map1', 32, 32);
        map.addTilesetImage('Tileset');
        layer = map.createLayer(0);
        layer.resizeWorld();
	//map tile collisions
        map.setCollisionBetween(0, 17);
		map.setCollisionBetween(19, 45);
	//weapon settings
        weapon = game.add.weapon(1,'bullet');
		weapon.bulletLifespan = 600; 
        weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
        weapon.bulletAngleOffset = 0;
        weapon.bulletSpeed = 400;
		weapon.lifespan=1;
	
		this.player = new PhaserShipGame.Avatar(this.game, 'You');

		PhaserShipGame.myAvatar = this.player;

    //spawn other players
		PhaserShipGame.eurecaServer.spawnOtherPlayers();
	
	/*//create player
        ShipClass1 = sessionStorage.getItem("ShipClass");
        if(ShipClass1 == 1)
        {
            player = this.add.sprite(150, 10, 'Sloop');
            player.anchor.set(0.5, 0.5);
            player.angle = 45;
            p1HealthText = this.add.text(50, 10, "Player 1: " + health1 + "%");
        }
        else if(ShipClass1 == 2)
        {
            player = this.add.sprite(150, 10, 'Caravel');
            player.anchor.set(0.5, 0.5);
            player.angle = 45;
            p1HealthText = this.add.text(50, 10, "Player 1: " + health1 + "%");
        }
        else if(ShipClass1 == 3)
        {
            player = this.add.sprite(150, 10, 'Barrack');
            player.anchor.set(0.5, 0.5);
            player.angle = 45;
            p1HealthText = this.add.text(50, 10, "Player 1: " + health1 + "%");
        }
        else if(ShipClass1 == 4)
        {
            player = this.add.sprite(150, 10, 'Brigantine');
            player.anchor.set(0.5, 0.5);
            player.angle = 45;
            p1HealthText = this.add.text(50, 10, "Player 1: " + health1 + "%");
        }
        else if(ShipClass1 == 5)
        {
            player = this.add.sprite(150, 10, 'Frigate');
            player.anchor.set(0.5, 0.5);
            player.angle = 45;
            p1HealthText = this.add.text(50, 10, "Player 1: " + health1 + "%");
        }
        else if(ShipClass1 == 6)
        {
            player = this.add.sprite(150, 10, 'ManOWar');
            player.anchor.set(0.5, 0.5);
            player.angle = 45;
            p1HealthText = this.add.text(50, 10, "Player 1: " + health1 + "%");
        }
	*///enable physics for objects
        this.physics.enable(player, Phaser.Physics.ARCADE);
        this.physics.enable(weapon, Phaser.Physics.ARCADE);
		player.enableBody = true;
	//set worldbounds for player and player2
        player.body.collideWorldBounds = true;
	//set drag and velocity for player
        if(ShipClass1 == 1)
        {
            player.body.drag.set(60);
            player.body.maxVelocity.set(100);
        }
        else if(ShipClass1 == 2)
        {
            player.body.drag.set(60);
            player.body.maxVelocity.set(100);
        }
        else if(ShipClass1 == 3)
        {
            player.body.drag.set(80);
            player.body.maxVelocity.set(60);
        }
        else if(ShipClass1 == 4)
        {
            player.body.drag.set(80);
            player.body.maxVelocity.set(60);
        }
        else if(ShipClass1 == 5)
        {
            player.body.drag.set(100);
            player.body.maxVelocity.set(30);
        }
        else if(ShipClass1 == 6)
        {
            player.body.drag.set(100);
            player.body.maxVelocity.set(30);
        }
	//weapon track for player
        weapon.trackSprite(player, 14, 0, true);
// Controls
	//Create cursorkeys
		cursors = this.input.keyboard.createCursorKeys();
	//player movement keys
        key1 = game.input.keyboard.addKey(Phaser.Keyboard.W);
        key2 = game.input.keyboard.addKey(Phaser.Keyboard.A);
        key3 = game.input.keyboard.addKey(Phaser.Keyboard.D);
	//player weapon keys
        fire1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    },//end create
//update function
    update: function () {
		p1HealthText.text = "player 1: "+ health1+"%";
		this.game.physics.arcade.collide(player,layer); //player collides with tiles
	//Player 1 Controls
		if(key1.isDown){
        this.physics.arcade.accelerationFromRotation(player.rotation, 200, player.body.acceleration);
        }
        else {
            player.body.acceleration.set(0);
        }
        if (key2.isDown) {
            player.body.angularVelocity = -50;
        }
        else if (key3.isDown) {
            player.body.angularVelocity = 50;
        }
        else {
            player.body.angularVelocity = 0;
        }
        if(fire1.isDown)
        {
            weapon.fire(); //fire bullet
			CannonBoom.play(); //play cannon blast
        }

		if(p1Lives<=0){
			//GameMusic.stop();
			//score++;
			console.log(score);
			p1Lives=3;
			
			score = 300;
		}	
	},//end update
};//end