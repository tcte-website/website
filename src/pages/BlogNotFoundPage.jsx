import Footer from '../components/Footer'
import Nav from '../components/Nav'
import PageMetadata from '../components/PageMetadata'
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton'
import '../styles/journal.css'

export default function BlogNotFoundPage({ navigate }) {
  return (
    <div className="journal-page min-h-screen bg-[#F9F6F0] font-sans text-[#293129]">
      <PageMetadata page="notFound" />
      <Nav navigate={navigate} currentPage="blog" />
      <main id="main-content" className="journal-not-found">
        <div>
          <p className="journal-eyebrow">The TCTE Journal</p>
          <h1>Story not found</h1>
          <p>The story you are looking for may have moved or is not available yet.</p>
          <a href="/blog">Return to the Journal</a>
        </div>
      </main>
      <WhatsAppFloatingButton />
      <Footer navigate={navigate} />
    </div>
  )
}
