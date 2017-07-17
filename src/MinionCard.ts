import Card from "./Card";

export default class MinionCard extends Card {
	public bodyTextColor = "black";
	public bodyTextSize = {width: 520, height: 290};
	public baseCardFrameAsset = "frame-minion-";
	public baseRarityGemAsset = "rarity-minion-";
	public nameBannerAsset = "name-banner-minion";
	public dragonAsset = "elite-minion";
	public dragonCoords = {dx: 196, dy: 0, dWidth: 529};
	public attackGemAsset = "attack-minion";
	public healthGemAsset = "health";
	public attackGemCoords = {
		sWidth: 214,
		sHeight: 238,
		dx: 0,
		dy: 862,
		dWidth: 214,
		dHeight: 238,
	};
	public attackTextCoords = {x: 128, y: 994};
	public healthGemCoords = {
		sWidth: 167,
		sHeight: 218,
		dx: 575,
		dy: 876,
		dWidth: 167,
		dHeight: 218,
	};
	public healthTextCoords = {x: 668, y: 994};
	public nameBannerCoords = {
		sWidth: 608,
		sHeight: 144,
		dx: 94,
		dy: 546,
		dWidth: 608,
		dHeight: 144,
	};
	public rarityGemCoords = {dx: 327, dy: 607};
	public nameTextCurve = {
		pathMiddle: 0.55,
		maxWidth: 560,
		curve: [{x: 0, y: 110}, {x: 122, y: 140}, {x: 368, y: 16}, {x: 580, y: 100}],
	};

	public getWatermarkCoords() {
		let dy = 735;
		if (this.raceText) {
			dy -= 10; // Shift up
		}

		return {
			dx: 270,
			dy: dy,
			dWidth: 256,
			dHeight: 256,
		};
	}
}