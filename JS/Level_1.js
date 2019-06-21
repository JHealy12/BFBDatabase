Game.Level_1 = function(game){};
//create variables for level1
	var map;
	var score;
	var scorelivesdeduct;
	var scorehealthdeduct;
	
	var layer;
	var player;
	var player2;
	var health1 = 100;
	var health2 = 100;
	var p1HealthText;
	var p2HealthText;
	var ShipClass1 = 0;
    var ShipClass2 = 0;
	var startPlayerx = 150;
	var startPlayery = 10;
	var startPlayer2x = 700;
	var startPlayer2y = 550;
	var cursors;
	var bullet;
	var weapon;
	var weapon2;
	var scoreText;
	var GameMusic;
	var damageSprite;
	var p1Lives = 3;
	var p2Lives = 3;

Game.Level_1.prototype = {
//create function
    create: function (game) {
		score = 0;
		scorehealthdeduct = 0;
		scorelivesdeduct = 0;
		scorehealthdeduct2 = 0;
		scorelivesdeduct2 = 0;
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
	//weapon 2 settings
        weapon2 = game.add.weapon(1,'bullet');
        weapon2.bulletLifespan = 600; 
        weapon2.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
        weapon2.bulletAngleOffset = 0;
        weapon2.bulletSpeed = 400;
	//create player
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
	//create player2
        ShipClass2 = sessionStorage.getItem("ShipClass2");
        if (ShipClass2 == 1)
        {
            player2 = this.add.sprite(700, 550, 'Sloop');
            player2.anchor.set(0.5, 0.5);
            player2.angle = 230;
            p2HealthText = this.add.text(550, 10, "Player 2: " + health2 + "%");
        }
        else if (ShipClass2 == 2)
        {
            player2 = this.add.sprite(700, 550, 'Caravel');
            player2.anchor.set(0.5, 0.5);
            player2.angle = 230;
            p2HealthText = this.add.text(550, 10, "Player 2: " + health2 + "%");
        }
        else if (ShipClass2 == 3)
        {
            player2 = this.add.sprite(700, 550, 'Barrack');
            player2.anchor.set(0.5, 0.5);
            player2.angle = 230;
            p2HealthText = this.add.text(550, 10, "Player 2: " + health2 + "%");
        }
        else if (ShipClass2 == 4)
        {
            player2 = this.add.sprite(700, 550, 'Brigantine');
            player2.anchor.set(0.5, 0.5);
            player2.angle = 230;
            p2HealthText = this.add.text(550, 10, "Player 2: " + health2 + "%");
        }
        else if (ShipClass2 == 5)
        {
            player2 = this.add.sprite(700, 550, 'Frigate');
            player2.anchor.set(0.5, 0.5);
            player2.angle = 230;
            p2HealthText = this.add.text(550, 10, "Player 2: " + health2 + "%");
        }
        else if (ShipClass2 == 6)
        {
            player2 = this.add.sprite(700, 550, 'ManOWar');
            player2.anchor.set(0.5, 0.5);
            player2.angle = 230;
            p2HealthText = this.add.text(550, 10, "Player 2: " + health2 + "%");
        }
	//enable physics for objects
        this.physics.enable(player, Phaser.Physics.ARCADE);
        this.physics.enable(player2, Phaser.Physics.ARCADE);
        this.physics.enable(weapon, Phaser.Physics.ARCADE);
        this.physics.enable(weapon2, Phaser.Physics.ARCADE);
		player.enableBody = true;
	//set worldbounds for player and player2
        player.body.collideWorldBounds = true;
        player2.body.collideWorldBounds = true;
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
	//set drag and velocity for player2
        if(ShipClass2 == 1)
        {
            player2.body.drag.set(60);
            player2.body.maxVelocity.set(100);
        }
        else if(ShipClass2 == 2)
        {
            player2.body.drag.set(60);
            player2.body.maxVelocity.set(100);
        }
        else if(ShipClass2 == 3)
        {
            player2.body.drag.set(80);
            player2.body.maxVelocity.set(60);
        }
        else if(ShipClass2 == 4)
        {
            player2.body.drag.set(80);
            player2.body.maxVelocity.set(60);
        }
        else if(ShipClass2 == 5)
        {
            player2.body.drag.set(100);
            player2.body.maxVelocity.set(30);
        }
        else if(ShipClass2 == 6)
        {
            player2.body.drag.set(100);
            player2.body.maxVelocity.set(30);
        }
	//weapon track for player
        weapon.trackSprite(player, 14, 0, true);
		//weapon.fireAngle = 90;
	//weapon track for player2
        weapon2.trackSprite(player2, 14, 0, true);
		//weapon2.fireAngle = 90;
// Controls
	//Create cursorkeys
		cursors = this.input.keyboard.createCursorKeys();
	//player movement keys
        key1 = game.input.keyboard.addKey(Phaser.Keyboard.W);
        key2 = game.input.keyboard.addKey(Phaser.Keyboard.A);
        key3 = game.input.keyboard.addKey(Phaser.Keyboard.D);
	//player weapon keys
        fire1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        //fire2 = game.input.keyboard.addKey(Phaser.Keyboard.E);
	//player2 weapon keys
        //fire3 = game.input.keyboard.addKey(Phaser.Keyboard.O);
        fire4 = game.input.keyboard.addKey(Phaser.Keyboard.P);
    },//end create
//update function
    update: function () {
		p1HealthText.text = "player 1: "+ health1+"%";
		p2HealthText.text = "player 2: "+ health2+"%";
		this.game.physics.arcade.collide(player,layer); //player collides with tiles
		this.game.physics.arcade.collide(player2,layer); //player2 collides with tiles
		if(this.game.physics.arcade.collide(player, player2)){ //player and player2 collide
		};
		if(this.game.physics.arcade.collide(player,weapon2.bullets)){ //if player collides with weapon2 bullet,player dies and respawns
			this.playerCollisions(player);
		};
		if(this.game.physics.arcade.collide(player2,weapon.bullets)){ //if player2 collides with weapon bullet,player2 dies and respawns
			this.player2Collisions(player2);
		};
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
	//Player 2 Controls
		if (cursors.up.isDown) {
            this.physics.arcade.accelerationFromRotation(player2.rotation, 200, player2.body.acceleration);
        }
        else {
            player2.body.acceleration.set(0);
        }
        if (cursors.left.isDown) {
            player2.body.angularVelocity = -50;
        }
        else if (cursors.right.isDown) {
            player2.body.angularVelocity = 50;
        }
        else {
            player2.body.angularVelocity = 0;
        }
		if(fire4.isDown)
		{
			weapon2.fire(); //fire bullet
			CannonBoom.play(); //play cannon blast
		}

		if(p1Lives<=0){
			//GameMusic.stop();
			//score++;
			console.log(score);
			p1Lives=3;
			
			score = 300;
			if(p2Lives == 3)
			{
			scorehealthdeduct = 100 - health2;
			score = score - scorehealthdeduct;
			health1=100;
			health2=100;
                GameMusic.mute = true;
			this.state.start("GameOver",true,false,score);
			
			}
			else if(p2Lives == 2)
			{
			scorelivesdeduct = 100;
			scorehealthdeduct = 100 - health2;
			score = score - scorehealthdeduct;
			score= score - scorelivesdeduct;
			health1=100;
			health2=100;
                GameMusic.mute = true;
			this.state.start("GameOver",true,false,score);
			}
			else if(p2Lives == 1)
			{
			scorelivesdeduct = 200;
			scorehealthdeduct = 100 - health2;
			score = score - scorehealthdeduct;
			score= score - scorelivesdeduct;
			health1=100;
			health2=100;
			GameMusic.mute = true;
			this.state.start("GameOver",true,false,score);
			}
		}
		
		if(p2Lives<=0){
			//GameMusic.stop();
			//score++;
			console.log(score);
			p2Lives=3;
			
			score = 300;
			if(p1Lives == 3)
			{
			scorehealthdeduct = 100 - health1;
			score = score - scorehealthdeduct;
			health1=100;
			health2=100;
                GameMusic.mute = true;
			this.state.start("GameOver",true,false,score);
			}
			else if(p1Lives == 2)
			{
			scorelivesdeduct = 100;
			scorehealthdeduct = 100 - health1;
			score = score - scorehealthdeduct;
			score= score - scorelivesdeduct;
			health1=100;
			health2=100;
                GameMusic.mute = true;
			this.state.start("GameOver",true,false,score);
			}
			else if(p1Lives = 1)
			{
			scorelivesdeduct = 200;
			scorehealthdeduct = 100 - health1;
			score = score - scorehealthdeduct;
			score= score - scorelivesdeduct;
			health1=100;
			health2=100;
			GameMusic.mute = true;
			this.state.start("GameOver",true,false,score);
			}
		}

    },//end update

//playerCollisions function
	playerCollisions: function(p,w){
		console.log("Player 1 Colliding");
		if (health1 == 0)
		{
            p.reset(150, 10); //reset player to starting location
			p1Lives -= 1;
			health1 = 100;
        }
        else if (health1 > 0)
        {
            if(ShipClass2 == 1)
            {
                console.log("Player 1 health");
                console.log("Player 1 health is" + health1);
                health1 = health1 - 1;
                console.log("Player 1 health is" + health1);
            }
            else if(ShipClass2 == 2)
            {
                console.log("Player 1 health");
                console.log("Player 1 health is" + health1);
                health1 = health1 - 1;
                console.log("Player 1 health is" + health1);
            }
            else if(ShipClass2 == 3)
            {
                console.log("Player 1 health");
                console.log("Player 1 health is" + health1);
                health1 = health1 - 2;
                console.log("Player 1 health is" + health1);
            }
            else if(ShipClass2 == 4)
            {
                console.log("Player 1 health");
                console.log("Player 1 health is" + health1);
                health1 = health1 - 2;
                console.log("Player 1 health is" + health1);
            }
            else if(ShipClass2 == 5)
            {
                console.log("Player 1 health");
                console.log("Player 1 health is" + health1);
                health1 = health1 - 4;
                console.log("Player 1 health is" + health1);
            }
            else if(ShipClass2 == 6)
            {
                console.log("Player 1 health");
                console.log("Player 1 health is" + health1);
                health1 = health1 - 4;
                console.log("Player 1 health is" + health1);
            }
        }
        },//end playerCollisions

//player2Collisions function
	player2Collisions: function(p){
		console.log("Player 2 Colliding");
		if (health2 == 0)
		{
            p.reset(700, 550); //reset player2 to starting location
			p2Lives -=1;
			health2 = 100;
        }
        else if(health2 >= 0)
        {
            if(ShipClass1 == 1)
            {
                console.log("Player 2 health");
                console.log("Player 2 health is" + health2);
                health2 = health2 - 1;
                console.log("Player 2 health is" + health2);
            }
            else if(ShipClass1 == 2)
            {
                console.log("Player 2 health");
                console.log("Player 2 health is" + health2);
                health2 = health2 - 1;
                console.log("Player 2 health is" + health2);
            }
            else if(ShipClass1 == 3)
            {
                console.log("Player 2 health");
                console.log("Player 2 health is" + health2);
                health2 = health2 - 2;
                console.log("Player 2 health is" + health2);
            }
            else if(ShipClass1 == 4)
            {
                console.log("Player 2 health");
                console.log("Player 2 health is" + health2);
                health2 = health2 - 2;
                console.log("Player 2 health is" + health2);
            }
            else if(ShipClass1 == 5)
            {
                console.log("Player 2 health");
                console.log("Player 2 health is" + health2);
                health2 = health2 - 4;
                console.log("Player 2 health is" + health2);
            }
            else if(ShipClass1 == 6)
            {
                console.log("Player 2 health");
                console.log("Player 2 health is" + health2);
                health2 = health2 - 4;
                console.log("Player 2 health is" + health2);
            }
        }
	},//end player2Collisions



};//end