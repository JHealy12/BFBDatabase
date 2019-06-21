Game.Preloader = function(game){

    this.preloadBar = null;
};
Game.Preloader.prototype={
    preload:function(){
        this.preloadBar = this.add.sprite(this.world.centreX, this.world.centreY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5,0.5);
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);
        //LOAD ALL ASSETS
		//load Tilemap
        this.load.tilemap('map1','Assets/Levels/level1_V2.csv'); //level 1 csv
		this.load.tilemap('map2','Assets/Levels/level2_V2.csv'); //level2 csv
		this.load.tilemap('map3','Assets/Levels/level3_V2.csv'); //level3 csv
        //Load tileset
        this.load.image('Tileset','Assets/Images/Tileset.png'); //tileset image
        //Load sprites
        this.load.spritesheet('Sloop','Assets/Images/Sprite_Sloop.png'); //player Sprite
		this.load.spritesheet('Caravel','Assets/Images/Sprite_Caravel.png'); //player Sprite
		this.load.spritesheet('Barrack','Assets/Images/Sprite_Barrack.png'); //player Sprite
		this.load.spritesheet('Brigantine','Assets/Images/Sprite_Brigantine.png'); //player Sprite
		this.load.spritesheet('ManOWar','Assets/Images/Sprite_ManOWar.png'); //player Sprite
		this.load.spritesheet('Frigate','Assets/Images/Sprite_Frigate.png'); //player Sprite
		//Load Images
		this.load.image('bullet','Assets/Images/CannonBall.png');//canonball sprite
        this.load.image('titlescreen','Assets/Images/title.png');//titlescreen image
		this.load.image('Dam10','Assets/Images/Sprite_DamMinus10.png'); //damage  minus 10 image
        this.load.image('button','Assets/Images/Button.png'); //button image
        this.load.image('button2','Assets/Images/Button2.png'); //button image
        this.load.image('buttonSAVE','Assets/Images/ButtonSAVE.png'); //button image
        this.load.image('buttonMENU','Assets/Images/ButtonMENU.png'); //button image
        this.load.image('Btn_Level1','Assets/Images/Btn_Level1.png'); //level 1 button image
		this.load.image('Btn_Level2','Assets/Images/Btn_Level2.png'); //level 2 button image
		this.load.image('Btn_Level3','Assets/Images/Btn_Level3.png'); //level 3 button image
        this.load.image('SloopBtn','Assets/Images/PlySelecSloop1.png');//Sloop Select Button
        this.load.image('CaravelBtn','Assets/Images/PlySelecCaravel1.png');//Caravel Select Button
        this.load.image('BarrackBtn','Assets/Images/PlySelecBarrack1.png');//Barrack Select Button
        this.load.image('BrigantineBtn','Assets/Images/PlySelecBrigantine1.png');//Brigantine Select Button
        this.load.image('ManOWarBtn','Assets/Images/PlySelecManOWar1.png');//Man O WarSelect Button
        this.load.image('FrigateBtn','Assets/Images/PlySelecFrigate1.png');//Frigate Select Button
        this.load.image('SloopBtn2','Assets/Images/PlySelecSloop2.png');//Sloop Select Button
        this.load.image('CaravelBtn2','Assets/Images/PlySelecCaravel2.png');//Caravel Select Button
        this.load.image('BarrackBtn2','Assets/Images/PlySelecBarrack2.png');//Barrack Select Button
        this.load.image('BrigantineBtn2','Assets/Images/PlySelecBrigantine2.png');//Brigantine Select Button
        this.load.image('ManOWarBtn2','Assets/Images/PlySelecManOWar2.png');//Man O WarSelect Button
        this.load.image('FrigateBtn2','Assets/Images/PlySelecFrigate2.png');//Frigate Select Button
        this.load.image('menu1', 'Assets/Images/MapHalf.png'); //menu bg image
        this.load.audio('MenuMusic','Assets/Music/MenuMusic.wav'); //menumusic audio
        this.load.audio('GameMusic','Assets/Music/BlackmoorTides.wav'); //gamemusic audio
		this.load.audio('CannonBoom','Assets/Music/BooM.wav'); //cannonboom audio
    },
    create:function(){
        this.state.start('JS/MainMenu')
    }

};