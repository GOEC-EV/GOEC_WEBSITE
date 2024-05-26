export const easing = [0.6, -0.06, 0.01, 0.99];

export const fadeInUp = {
	initial: { y: 600, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.4,
			ease: easing,
			duration: 0.5,
			stiffness: 300,
		},
	},
};
export const transitionValue = {
	delay: 0.3,
	ease: 'linear',
	duration: 0.5,
};

export const reveal = {
	hidden: { x: -900, opacity: 0.1 },
	show: { x: 0, opacity: 1 },
};
export const veal = {
	hidden: { x: 600, opacity: 0.1 },
	show: { x: 0, opacity: 1 },
};

export const fromUp = {
	hidden: {
		y: 50,
		opacity: 0.1,
	},
	show: {
		y: 0,
		opacity: 1,
	},
};
export const opacityUp = {
	hidden: {
		opacity: 0.1,
	},
	show: {
		opacity: 1,
	},
};
export const fromDown = {
	hidden: {
		y: -200,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
	},
};
