import { lazy, Suspense, useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import Loading from './components/Loading'
import PageMetadata from './components/PageMetadata'
import './App.css'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))
const PartnersPage = lazy(() => import('./pages/PartnersPage'))

const validPages = ['home', 'about', 'services', 'gallery', 'contact', 'privacy', 'refund', 'terms']

const publicPages = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  gallery: GalleryPage,
  contact: ContactPage,
  privacy: PrivacyPolicy,
  refund: RefundPolicy,
  terms: TermsConditions,
}

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '').replace('/', '').trim()
  return validPages.includes(hash) ? hash : 'home'
}

function getIsPartnersRoute() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  return pathname === '/partners'
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash)
  const [isPartnersRoute, setIsPartnersRoute] = useState(getIsPartnersRoute)

  const navigate = (page) => {
    if (!validPages.includes(page)) return

    window.location.hash = page
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handlePopState = () => setIsPartnersRoute(getIsPartnersRoute())

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  if (isPartnersRoute) {
    return (
      <Suspense fallback={<Loading />}>
        <PartnersPage />
      </Suspense>
    )
  }

  const CurrentPage = publicPages[currentPage] ?? HomePage

  return (
    <>
      <PageMetadata page={currentPage} />
      <Suspense fallback={<Loading />}>
        <CurrentPage navigate={navigate} />
      </Suspense>
    </>
  )
}
