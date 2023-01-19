export function animate(elem: HTMLElement, duration: number) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {

    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);
    
    draw(elem, progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

function timing(timeFraction: number) {
  return timeFraction
}

function draw(elem: HTMLElement, pr: number) {
  elem.style.translate = pr * 1240 + 'px';
}