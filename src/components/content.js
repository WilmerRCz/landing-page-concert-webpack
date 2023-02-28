import { cardContent } from "./cardContent"



export const content = () => {
  const grid = document.createElement('div')
  grid.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-3', 'gap-4', 'm-4', 'p-8')
  grid.appendChild(cardContent('fa-sharp fa-solid fa-drum fa-5x'))
  grid.appendChild(cardContent('fa-solid fa-lightbulb fa-5x'))
  grid.appendChild(cardContent('fa-solid fa-people-group fa-5x'))

  return grid
}