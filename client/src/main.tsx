import ReactDOM from 'react-dom/client'
import App from '@/App'

// CSS for tailwind
// import './styles.css'

// CSS for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * Strict Mode
 */

// import { StrictMode } from 'react'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )

/**
 * Non Strict Mode
 */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
