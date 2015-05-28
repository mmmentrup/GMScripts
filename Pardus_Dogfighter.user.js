// ==UserScript==
// @name        Pardus Dogfighter
// @namespace   pardusDogFighter
// @description DogFighter 1.0
// @include     http://*.pardus.at/*
// @version     1
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

//alert(window.location);
/*
http://artemis.pardus.at/main.php     Main Page
http://artemis.pardus.at/msgframe.php Display Messages and alerts
http://artemis.pardus.at/menu.php     Nav Bar
http://artemis.pardus.at/ship2opponent_combat.php?opponentid=10708   Battle Screen
http://artemis.pardus.at/game.php     Whole Page
*/
function getServer() {
  return window.location.host.substr(0,window.location.host.indexOf("."));
}

function determineShipArmor(shipName) {
	var shipArmor = {
		'tyrant':60, 'junkeriv':90, 'rustclaw':135, 'elpadre':195, 'hercules':195, 
		'babel transporter':210, 'harrier':210, 'rustfire':210, 'sabre':225, 
		'spectre':225, 'wasp':240, 'adder':255, 'ficon':270, 'thunderbird':270, 
		'constrictor':285, 'interceptor':285, 'slider':285, 'lanner mini':300, 
		'leviathan':330, 'marauder':330, 'trident':330, 'extender':345, 'celeus':360, 
		'piranha':375, 'venom':375, 'blood lanner':390, 'lanner':390, 'mantis':390, 
		'mercury':390, 'behemoth':405, 'shadow_stealth craft':405, 
		'viper defence craft':405, 'rover':420, 'vulcan':425, 'gargantua':450, 
		'boa ultimate carrier':465, 'chitin':465, 'hawk':480, 'horpor':480, 
		'pantagruel':480, 'reaper':495, 'nano':500, 'dominator':510, 'liberator':510, 
		'nighthawk':510, 'phantom advanced stealth craft':525, 'liberator eps':540, 
		'mooncrusher':540, 'nighthawk deluxe':540, 'gauntlet':585, 'sudden death':600, 
		'scorpion':630, 'doomstar':720, 'war nova':990, 'harvester':705
	};
	return shipArmor[shipName];
};
function determineArmorStrength(armorName) {
  var armorStrength = {
    'titanium':1,'tritanium':2,'zortrium':3,'neutronium':4,
    'adamantium':5,'ebidium':6,'worm-slime':2,'mykoplasmic':3,
    'mutagen':4,'genotrope':5,'fermion':2,'boson':3,
    'positron':4,'anti-neutrino':4
  };
  return armorStrength[armorName];
}

function repairShip() {
  
}
//Battle Screen Stuff

//alert(window.location.indexOf("ship2opponent_combat.php"));
if(window.location.href.indexOf("ship2opponent_combat.php")!=-1) {
  
}
//alert(window.location.href);
//Main Screen Stuff
if(window.location.href.indexOf("main.php")!=-1) {
  
}

if(window.location.href.indexOf("overview_ship.php")!=-1) {
  //Gets infomation
  var table = document.querySelectorAll(".messagestyle")[0];
  var tr = table.querySelectorAll("tr");
  var td = tr[1].querySelectorAll("td")[1].innerHTML.toLowerCase();
  GM_setValue(getServer()+"_Ship",td); //Set Ships Name
  var td = tr[15].querySelectorAll("td")[1].querySelector("b").innerHTML.toLowerCase();
  GM_setValue(getServer()+"_Armor",td.substring(0,td.indexOf(" "))) //Set Ships Armor
  alert("Ship Name: "+GM_getValue(getServer()+"_Ship")+" \nArmor Name: "+GM_getValue(getServer()+"_Armor")+"\nArmor Str: "+determineArmorStrength(GM_getValue(getServer()+"_Armor")));
}
