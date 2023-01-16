import './style.css';

export const ContainerHr = (comp: HTMLButtonElement[]) => {
  const block = document.createElement('div');
  block.className = 'container-hr';
  block.append(...comp);
  console.log(comp);

  return block;
}