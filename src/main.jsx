import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import ReduxComponent from './components/ReduxComponent.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

   <Provider store={store}>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
 <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/redux" element={<ReduxComponent />} />
    </Routes>
  </BrowserRouter>,

   </Provider>
 
 
)
