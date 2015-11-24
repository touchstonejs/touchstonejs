var animation = require('tween.js');

function update () {
	animation.update();
	if (animation.getAll().length) {
		window.requestAnimationFrame(update);
	}
}

function scrollToTop (el, options) {
	options = options || {};
	var from = el.scrollTop;
	var duration = Math.min(Math.max(200, from / 2), 350);
	if (from > 200) duration = 300;
	el.style.webkitOverflowScrolling = 'auto';
	el.style.overflow = 'hidden';
	var tween = new animation.Tween({ pos: from })
		.to({ pos: 0 }, duration)
		.easing(animation.Easing.Quadratic.Out)
		.onUpdate(function () {
			el.scrollTop = this.pos;
			if (options.onUpdate) {
				options.onUpdate();
			}
		})
		.onComplete(function () {
			el.style.webkitOverflowScrolling = 'touch';
			el.style.overflow = 'scroll';
			if (options.onComplete) options.onComplete();
		})
		.start();
	update();
	return tween;
}

exports.scrollToTop = scrollToTop;

var Mixins = exports.Mixins = {};

Mixins.ScrollContainerToTop = {
	componentDidMount () {
		window.addEventListener('statusTap', this.scrollContainerToTop);
	},
	componentWillUnmount () {
		window.removeEventListener('statusTap', this.scrollContainerToTop);
		if (this._scrollContainerAnimation) {
			this._scrollContainerAnimation.stop();
		}
	},
	scrollContainerToTop () {
		if (!this.isMounted() || !this.refs.scrollContainer) return;
		this._scrollContainerAnimation = scrollToTop(this.refs.scrollContainer, {
			onComplete: () => { delete this._scrollContainerAnimation; }
		});
	}
};
