export function clearPage() {
  clear('winners');
  clear('garage');
}

export function clear(elem: string) {
  const item = document.querySelector(`.${elem}`) as HTMLElement;

  if (item) item.remove();
}

export function random(n: number) {
  return Math.ceil(Math.random() * n);
}

export function generateURL(s: string) {
  return 'http://127.0.0.1:3000/' + s;
}