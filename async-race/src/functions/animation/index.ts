export function animate(timing: (arg: number) => number, draw: (p: number) => {}, duration: number) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {

    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}