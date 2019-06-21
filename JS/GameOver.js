var gameOver = function(game){}
var theScore;
var button;
var button2;

gameOver.prototype = {
    init: function(score){
        this.theScore = score;
//		alert("You scored: "+score)
    },
    create: function(){

        menu_music.play();
        //background image
        var s = this.add.sprite(0, 0, 'menu1');
        var t = this.add.sprite(280, 200, 'button2');

        this.game.add.text(300, 220, 'This is the end of game. Your score is '+this.theScore+'.', { fill: '#ffffff', font: '14pt Arial' });
        this.game.add.text(400, 300, 'END', { fill: '#ffffff', font: '14pt Arial' });

        var Thebutton = this.game.add.button(400, 300, 'buttonSAVE', this.actionOnClick, this, 0, 1, 0);
        Thebutton.onInputDown.add(this.onDown, this);

        var Thebutton2 = this.game.add.button(400, 400, 'buttonMENU', this.actionOnClick, this, 0, 1, 0);
        Thebutton2.onInputDown.add(this.onDown2, this);


    },


    onDown: function(){
        console.log("in ondown");

        var person = prompt("Please enter your name", "Harry Potter");
        if (person != null) {



            var obj = {
                'person': person,
                'score': this.theScore
            };

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'JS/SaveScore.php');
            xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
            jsonData = JSON.stringify(obj);

            xhr.onreadystatechange = function() {
                if (xhr.status === 200) {
                    alert(xhr.responseText);
                }
            };
            xhr.send('json=' + jsonData);

        }

    },

    onDown2: function(){
        console.log("in ondown");

        this.state.start('JS/MainMenu');
    }






}