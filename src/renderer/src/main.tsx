import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './app.css'

const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement
const htmlElement = document.documentElement

// Set initial theme based on checkbox state
if (themeToggle.checked) {
  htmlElement.setAttribute('data-theme', 'dark')
} else {
  htmlElement.setAttribute('data-theme', 'light')
}

// Listen for changes to the checkbox
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    htmlElement.setAttribute('data-theme', 'dark')
  } else {
    htmlElement.setAttribute('data-theme', 'light')
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
