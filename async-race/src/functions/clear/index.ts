export function clear() {
  const winners = document.querySelector('.winners') as HTMLElement;
  const garage = document.querySelector('.garage') as HTMLElement;

  if (winners) winners.remove();
  if (garage) garage.remove();
}