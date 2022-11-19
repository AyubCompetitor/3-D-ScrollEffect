// 3D Scroll

let zSpacing = -1000;
let lastPos = zSpacing / 5;
const $frames = document.getElementsByClassName("frame");
const frames = Array.from($frames);
let zVals = [];

window.onscroll = function () {
	let top = document.documentElement.scrollTop;
	let delta = lastPos - top;

	lastPos = top;

	frames.map((item, index) => {
		zVals.push(index * zSpacing + zSpacing);
		zVals[index] += delta * -5.5;
		let frame = frames[index],
			transform = `translateZ(${zVals[index]}px)`,
			opacity = zVals[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
		frame.setAttribute(
			"style",
			`transform: ${transform}; opacity: ${opacity}`
		);
	});
};

window.scrollTo(0, 1);
