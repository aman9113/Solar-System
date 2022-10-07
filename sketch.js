var body=[];
var dt=3;
var G=.1;
var n=4;
var text1="Solar System Simulation";
var text2="This simple hyperlapse the motion of Mercury, Venus and Earth around the Sun.";
var text3="Mercury";
var text4="Venus";
var text5="Earth";

function setup(){
	var W=windowWidth;
	var H=windowHeight;
	createCanvas(W,H);
	background(0);
	body[0]=new planets(W/2,H/2,100,1600);
	body[0].col="#ffc300";
	body[1]=new planets(W/2-330,H/2,6,.005);
	body[1].col="#709dd8";
	body[2]=new planets(W/2-220,H/2,5,.002);
	body[2].col="#F58345";
	body[3]=new planets(W/2-100,H/2,3,.0005);
	body[3].col="#78878c";

	body[1].vy=.64;
	body[2].vy=.8;
	body[3].vy=1.2;
}

function draw(){
	background(0,0,0,40);
	fill("#26d38e")
	strokeWeight(0);
	textSize(30);
	textStyle(ITALIC);
	text(text1,width-400,60);

	textSize(15);
	textStyle(NORMAL);
	text(text2,width-370,90,250,500);
	
	fill("#ADBAC0")
	textSize(20);
	textStyle(ITALIC);
	text(text3,width-400,200);

	fill("#F58345")
	textSize(20);
	textStyle(ITALIC);
	text(text4,width-400,230);

	fill("#709dd8")
	textSize(20);
	textStyle(ITALIC);
	text(text5,width-400,260);

	
	for(var i=0; i<n; i++){
		body[i].display();
	}
	for(var i=0; i<n; i++){
		body[i].fx=0;
		body[i].fy=0;
		for(var j=0; j<n; j++){
			if(i!=j){
				body[i].attraction(body[j]);
			}
		}
	}

	for(var i=0; i<n; i++){
		body[i].update();
	}


}
