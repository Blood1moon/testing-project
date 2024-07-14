const keyframesIn = [
  { opacity: 0, transform: 'cale(0.8)' },
  { opacity: 1, transform: 'cale(1)' }
];

const keyframesOut = [
  { opacity: 1, transform: 'cale(0.8)' },
  { opacity: 0, transform: 'cale(1)' }
];

const options = { fill: 'both', duration: 600, easing: 'ease' };

this.renderer.domElement.animate(keyframesIn, options);
const placeHolderAnim = placeholder.animate(keyframesOut, options);
placeHolderAnim.addEventListener('finish', () => {
  placeholder.remove();
});
