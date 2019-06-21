var phaserShipGame = PhaserShipGame || {};


PhaserShipGame.MultiplayerServerReady = false;
PhaserShipGame.playerList = PhaserShipGame.playerList || {};
PhaserShipGame.MyMyltiplayerId = 0;

//this function will handle client communication with the server
PhaserShipGame.eurecaClientSetup = function() {
	//create an instance of eureca.io client
	var eurecaClient = new Eureca.Client();
	
	eurecaClient.ready(function (proxy) {		
		PhaserShipGame.eurecaServer = proxy;
	});
	
	
	//methods defined under "exports" namespace become available in the server side
	
	eurecaClient.exports.setId = function(id) 
	{
		PhaserShipGame.MyMyltiplayerId = id;
		PhaserShipGame.eurecaServer.handshake();
		PhaserShipGame.MultiplayerServerReady = true;
	}	
	
	eurecaClient.exports.kill = function(id)
	{	
		if (PhaserShipGame.playerList[id]) {
			PhaserShipGame.playerList[id].kill();
			console.log('killing ', id, PhaserShipGame.playerList[id]);
		}
	}	
	
	eurecaClient.exports.spawnAnotherPlayer = function(id, x, y, color, ip)
	{
		
		if (id == PhaserShipGame.MyMyltiplayerId) return; //this is me
		
		console.log('Spawning another player with name ' + ip);
		var plr = new PhaserShipGame.Avatar(PhaserShipGame.game, ip, x, y, color);
		PhaserShipGame.playerList[id] = plr;
	}
	
	eurecaClient.exports.updateState = function(id, state)
	{
		if (PhaserShipGame.playerList[id] && PhaserShipGame.MyMyltiplayerId  !== id)  {

			//PhaserShipGame.playerList[id].cursor = state;
			PhaserShipGame.playerList[id].setX(state.x);
			PhaserShipGame.playerList[id].setY(state.y);
			console.log("ffor player "+id+" the y is :"+state.y);
			if (state.animationPlaying) {
				PhaserShipGame.playerList[id].playAnimation(state.animationPlaying);
			} else {
				PhaserShipGame.playerList[id].stopAnimations();
			}

			if (PhaserShipGame.playerList[id].playerColor !== state.playerColor) {
				PhaserShipGame.playerList[id].setColor(state.playerColor);
			}

			if (PhaserShipGame.playerList[id].name !== state.playerName) {
				PhaserShipGame.playerList[id].setName(state.playerName);
			}

		}
	}
}
