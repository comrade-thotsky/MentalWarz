export default class Player{
	constructor(gamescreenwidth, gamescreenheight){
		this.size = 50;
		this.position = {
			x : 0,
			y : 0
		};
	}
	draw(ctx){
		ctx.fillRect(this.position.x, this.position.y, this.size, this.size)
	}
}