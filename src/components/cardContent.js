export const cardContent = () => {
  const container = document.createElement('div')
  container.classList.add('col-span-1', 'bg-slate-800','h-full', 'rounded', 'shadow-lg', 'p-4', 'hover:shadow-slate-600')

  const containerIcon = document.createElement('div')
  containerIcon.classList.add('justify-center', 'text-center')
  container.appendChild(containerIcon)


  const icon = document.createElement('i')
  icon.classList.add('fa-solid', 'fa-people-group', 'fa-5x','text-transparent', 'bg-clip-text', 'bg-gradient-to-r', 'from-green-500', 'to-amber-500')
  containerIcon.appendChild(icon)




  const containerText = document.createElement('div')
  containerText.classList.add('text-center', 'm-4')
  container.appendChild(containerText)

  const textCard = document.createElement('p')
  textCard.classList.add('text-white')
  textCard.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit consequuntur quas reiciendis veritatis odit vero oloremque, alias minima nemo aut. Labore totam iure, magnam quas ipsum minus dolores mollitia autem!'
  containerText.appendChild(textCard)


  return container
}