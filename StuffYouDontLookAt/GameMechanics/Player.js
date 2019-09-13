export default class Player{
	constructor(gamescreenwidth, gamescreenheight){
		this.size = 50;
		this.position = {
			x : 0,
			y : 0
		};
		this.color = "red";
	}
	draw(ctx){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
	}
}