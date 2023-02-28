import { inputForm } from "./inputForm"
import { buttonForm } from "./buttonForm"

export const form = () => {
  const container = document.createElement('div')
  container.classList.add('absolute', 'inset-0', 'flex', 'flex-col', 'justify-center', 'items-start', 'mx-4', 'sm:m-4')


  const styleForm = document.createElement('div')
  styleForm.classList.add('backdrop-blur-xl', 'rounded-3xl', 'p-2', 'sm:p-4')
  container.appendChild(styleForm)
  const myForm = document.createElement('form')
  styleForm.appendChild(myForm)
  myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Se recibieron los datos exitosamente')
  })

  const gridForm = document.createElement('div')
  gridForm.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-2')
  myForm.appendChild(gridForm)


  const titleForm = document.createElement('h2')
  titleForm.classList.add('col-span-2', 'text-white', 'font-semibold', 'uppercase')
  titleForm.textContent = 'Si quieres saber mas datos del concierto rellena este formulario'
  gridForm.appendChild(titleForm)


  gridForm.appendChild(inputForm('name','name','text','NOMBRE'))
  gridForm.appendChild(inputForm('lastname','lastname','text','APELLIDO'))
  gridForm.appendChild(inputForm('phone','phone','number','CELULAR'))
  gridForm.appendChild(inputForm('age','age','date','FECHA DE NACIMIENTO'))
  gridForm.appendChild(inputForm('email','email','email','CORREO'))
  gridForm.appendChild(buttonForm())



  return container
}