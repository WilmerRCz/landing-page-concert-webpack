import './styles.css'
import {hero} from './components/hero'
import { content } from './components/content'

const body = document.querySelector('body')
body.classList.add(
  'bg-slate-900'
)

const heroSection = hero()
const contentSection = content()

body.appendChild(heroSection)
body.appendChild(contentSection)
