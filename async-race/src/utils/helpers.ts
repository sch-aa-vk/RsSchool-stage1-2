export function clear() {
  const winners = document.querySelector('.winners') as HTMLElement;
  const garage = document.querySelector('.garage') as HTMLElement;

  if (winners) winners.remove();
  if (garage) garage.remove();
}

export function random(n: number) {
  return Math.ceil(Math.random() * n);
}

export function generateURL(s: string) {
  return 'http://127.0.0.1:3000/' + s;
}