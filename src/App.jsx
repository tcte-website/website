import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import TermsConditions from './pages/TermsConditions'
import Loading from './components/Loading'
import './App.css'

const validPages = ['home', 'about', 'services', 'gallery', 'contact', 'privacy', 'refund', 'terms']

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '').replace('/', '').trim()
  return validPages.includes(hash) ? hash : 'home'
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash)
  
  const [isLoading, setIsLoading] = useState(true)

  const navigate = (page) => {
    setIsLoading(true)
    
    window.location.hash = page
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    setTimeout(() => {
      setIsLoading(false)
    }, 1500) 
  }

  useEffect(() => {

    const initialTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    const handleHashChange = () => {
      const newPage = getPageFromHash()
     
      if (newPage !== currentPage) {
        setIsLoading(true)
        setCurrentPage(newPage)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        
        setTimeout(() => {
          setIsLoading(false)
        }, 1500)
      }
    }
    
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      clearTimeout(initialTimer)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [currentPage])

  const pages = {
    home: <HomePage navigate={navigate} />,
    about: <AboutPage navigate={navigate} />,
    services: <ServicesPage navigate={navigate} />,
    gallery: <GalleryPage navigate={navigate} />,
    contact: <ContactPage navigate={navigate} />,
    privacy: <PrivacyPolicy navigate={navigate} />,
    refund: <RefundPolicy navigate={navigate} />,
    terms: <TermsConditions navigate={navigate} />,
  }

  if (isLoading) {
    return <Loading />
  }

  return pages[currentPage] || pages.home
}


// import { useState, useEffect } from 'react'
// import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'
// import ServicesPage from './pages/ServicesPage'
// import GalleryPage from './pages/GalleryPage'
// import ContactPage from './pages/ContactPage'
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import RefundPolicy from './pages/RefundPolicy'
// import TermsConditions from './pages/TermsConditions'
// import './App.css'

// const validPages = ['home', 'about', 'services', 'gallery', 'contact', 'privacy', 'refund', 'terms']

// function getPageFromHash() {
//   const hash = window.location.hash.replace('#', '').replace('/', '').trim()
//   return validPages.includes(hash) ? hash : 'home'
// }

// export default function App() {
//   const [currentPage, setCurrentPage] = useState(getPageFromHash)

//   const navigate = (page) => {
//     window.location.hash = page
//     setCurrentPage(page)
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   useEffect(() => {
//     const handleHashChange = () => {
//       setCurrentPage(getPageFromHash())
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//     }
//     window.addEventListener('hashchange', handleHashChange)
//     return () => window.removeEventListener('hashchange', handleHashChange)
//   }, [])

//   const pages = {
//     home: <HomePage navigate={navigate} />,
//     about: <AboutPage navigate={navigate} />,
//     services: <ServicesPage navigate={navigate} />,
//     gallery: <GalleryPage navigate={navigate} />,
//     contact: <ContactPage navigate={navigate} />,
//     privacy: <PrivacyPolicy navigate={navigate} />,
//     refund: <RefundPolicy navigate={navigate} />,
//     terms: <TermsConditions navigate={navigate} />,
//   }

//   return pages[currentPage] || pages.home
// }


// import { useState } from 'react'
// import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'
// import ServicesPage from './pages/ServicesPage'
// import GalleryPage from './pages/GalleryPage'
// import ContactPage from './pages/ContactPage'
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import RefundPolicy from './pages/RefundPolicy'
// import TermsConditions from './pages/TermsConditions'
// import './App.css'

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home')

//   const navigate = (page) => setCurrentPage(page)

//   const pages = {
//     home: <HomePage navigate={navigate} />,
//     about: <AboutPage navigate={navigate} />,
//     services: <ServicesPage navigate={navigate} />,
//     gallery: <GalleryPage navigate={navigate} />,
//     contact: <ContactPage navigate={navigate} />,
//     privacy: <PrivacyPolicy navigate={navigate} />,
//     refund: <RefundPolicy navigate={navigate} />,
//     terms: <TermsConditions navigate={navigate} />,
//   }

//   return pages[currentPage] || pages.home
// }