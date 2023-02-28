export const buttonForm = () => {
  const button = document.createElement('button')
  button.classList.add('text-white', 'font-bold', 'uppercase', 'rounded-lg', 'px-2', 'py-1', 'bg-gradient-to-r', 'from-green-500', 'to-amber-500', 'hover:from-amber-500', 'hover:to-green-500')
  button.textContent = 'Enviar'
  

  return button
}