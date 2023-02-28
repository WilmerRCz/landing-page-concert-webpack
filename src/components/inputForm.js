
export const inputForm = (id, name, type, placeholder) => {
  const input = document.createElement('input');
  input.classList.add('col-span-2', 'sm:col-span-1', 'px-2', 'w-full', 'rounded-lg', 'border-2', 'border-green-500', 'focus:border-green-300', 'focus:outline-none')
  input.setAttribute('id', id)
  input.setAttribute('name', name)
  input.setAttribute('type', type);
  input.setAttribute('placeholder', placeholder)
  input.setAttribute('required', 'true')

  return input
}