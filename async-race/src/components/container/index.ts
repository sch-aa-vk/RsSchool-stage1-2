import './style.css';

export const Container = (comp: HTMLElement[], flow: string) => {
  const block = document.createElement('div');
  block.className = 'container';
  block.style.flexFlow = flow;
  block.append(...comp);

  return block;
}