function splitScroll(){
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '200%',
		triggerElement: '#about'
		triggerHook: 0
	})
	.setPin('#about')
	.addIndicators()
	.addTo(controller);
}

splitScroll();































