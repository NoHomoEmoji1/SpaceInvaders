let can;let pic1;  let picAr=[]; let butTon;

function setup() {
can=createCanvas(500,400);
can.position(100,100);
can.class("bdd");
pic1=new moveObj(300,300,4,5);
// pic2=new moveObj(400,300,3,4);
picAr.push(new moveObj(400,300,-4,3));	
butTon=select('#but');butTon.position(600,10);
}

function draw() {
background(250,250,250);
pic1.display();
pic1.move();
pic1.chkbdd();
// pic2.chkbdd();
// pic2.move();
// pic2.display();
for(let j=0;j<picAr.length;j++){
	picAr[j].move();picAr[j].chkbdd();picAr[j].display();
	
}

}

function addpic(){
	picAr.push(new moveObj(200,200,2,3));	
}