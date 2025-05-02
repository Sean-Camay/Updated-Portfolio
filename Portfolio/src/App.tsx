import { Routes, Route } from 'react-router-dom'
import { MainView } from './Views/Main-View'
import { AboutView } from './Views/About-View'
import { WorkView } from './Views/Work-View'
import { ContactView } from './Views/Contact-View'
import { AnkuraWork } from './Views/Ankura-Work'
import { AilevateWork } from './Views/Ailevate-Work'
import { MiniPopWork } from './Views/Mini-Pop-Work'
import { GEHAWork } from './Views/GEHA-Work'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/work' element={<WorkView />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='/ankura-work' element={<AnkuraWork />} />
        <Route path='/ailevate-work' element={<AilevateWork />} />
        <Route path='/mini-pop-work' element={<MiniPopWork />} />
        <Route path='/geha-work' element={<GEHAWork />} />
      </Routes>
    </>
  )
}

export default App
