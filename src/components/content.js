import { cardContent } from "./cardContent"



export const content = () => {
  const grid = document.createElement('div')
  grid.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-3', 'gap-4', 'm-4', 'p-8')
  grid.appendChild(cardContent())
  grid.appendChild(cardContent())
  grid.appendChild(cardContent())

  return grid
}