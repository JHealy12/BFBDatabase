<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Game</title>
    <link href="index.css" rel="stylesheet" type="text/css">
    <script src="LightBox/jquery-1.11.0.min.js"></script>
    <script src="LightBox/lightbox.min.js"></script>
    <link href="LightBox%20CSS/lightbox.css" rel="stylesheet" />
    <script src="JS/phaser.min.js"></script>
    <script src="JS/Boot.js"></script>
    <script src="JS/Preloader.js"></script>
    <script src="JS/MainMenu.js"></script>
	<script src="JS/ControlPage.js"></script>
    <script src="JS/AboutPage.js"></script>
    <script src="JS/LevelMenu.js"></script>
    <script src="JS/Player1Select.js"></script>
    <script src="JS/Player2Select.js"></script>
    <script src="JS/Level_1.js"></script>
	<script src="JS/GameOver.js"></script>
</head>
<body>
<div id="container">
    <div id="header">
        <p>Black Flag Battles</p>
    </div>
    <div id="content-container">
        <div id="navMenu">
            <ul>
                <li> <a href="index.html">Home</a>
                <li> <a href="Game.html">Game</a>
                <li> <a>Design Document</a>
                    <ul>
                        <li><a href="GameInspiration.html">Game Inspiration</a></li>
                        <li><a href="DesignDetails.html">Design Details</a></li>
                        <li><a href="Story.html">Story</a></li>
                        <li><a href="OnOffData.html">Offline, Online & Database</a></li>
                        <li><a href="TeamRoles.html">Team Roles</a></li>
                        <li><a href="GamePlay.html">Game Play</a></li>
                        <li><a href="Mechanics.html">Mechanics</a></li>
                        <li><a href="GameObjectives.html">Game Objective</a></li>
                    </ul> <!-- end inner UL -->
                <li> <a>The Team</a>
                    <ul>
                        <li><a href="David.html">David</a></li>
                        <li><a href="Jack.html">Jack</a></li>
                        <li><a href="Thomas.html">Thomas</a></li>
                        <li><a href="ProjectManagement.html">Project Management</a></li>
                    </ul>
                <li> <a href="ContactUs.html">Contact Us</a>
                </li> <!-- end main LI -->
            </ul> <!-- end main UL -->
            <br class="clearFloat" />
        </div> <!-- end navMenu -->
        <div id="content3" align="center">
            <h2>
                BLACK FLAG BATTLES
            </h2>
            <script type = "text/javascript">
                window.onload = function(){
                    var game = new Phaser.Game(800,600,Phaser.CANVAS,'phaser-example');
                    game.state.add('JS/Boot',Game.Boot);
                    game.state.add('JS/Preloader',Game.Preloader);
                    game.state.add('JS/MainMenu',Game.MainMenu);
                    game.state.add('JS/ControlPage',Game.ControlPage);
					game.state.add('JS/AboutPage',Game.AboutPage);
                    game.state.add('JS/LevelMenu',Game.LevelMenu);
                    game.state.add('JS/Level1_V2',Game.Level_1);
                    game.state.add('JS/Player1Select',Game.Player1Select);
                    game.state.add('JS/Player2Select',Game.Player2Select);
					game.state.add('GameOver',gameOver);
                    game.state.start('JS/Boot');
                };
            </script>
            <div id="phaser-example" align="center"></div>
        </div>
        </div>
    </div>
        <div id="footer">
             <a href="default.asp"></a>
 <a href="https://www.facebook.com/DuckBornStudios/" style="width:81px;height:80px;border:0;"  align="left"></a>              
        <a href="https://www.facebook.com/DuckBornStudios/">
                <img src="Assets/Images/Duckborn.png" align="left"></a>
         <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <p class="text-left"><a href="https://www.facebook.com/DuckBornStudios/">Follow us on Facebook &nbsp;</a>
                    <a href="https://www.facebook.com/DuckBornStudios/">
                        <img src="Assets/Images/facebook.png" ></a></p>
            </div>
        </div>
    </div>
        Copyright © Duck Born Studios, 2019
    </div>
</div>
</body>
</html>