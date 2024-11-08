
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/authContext'

function App() {
  

  return (
    <>
   <AuthProvider>
   <Navbar/>
   <main className='min-h-screen font-primary max-w-screen-2xl px-4 py-6 mx-auto' >
     <Outlet/>
   </main>
   <Footer/>
   </AuthProvider>
    </>
  )
}

export default App
