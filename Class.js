class moveObj{
	constructor(xs,ys,vxs,vys){
		this.x=xs;this.y=ys;this.vxs=vxs;this.vys=vys;
		this.pic=createImg('ripX.jpg');
		this.pic.class('picbdd');}
		// this.pic2.class=createImg('download.jpg');
move(){
	this.x=this.x+this.vxs;
	this.y=this.y+this.vys;}
	chkbdd(){
		if(this.x<0||this.x>windowWidth){
			this.vxs=-1*this.vxs;}
			if(this.y<0||this.y>windowHeight){this.vys=-1*this.vys;}
	}
	display(){
		this.pic.position(this.x,this.y);
		}
		
		
		
		}
	