import { ArrowRight, Clock } from 'lucide-react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import PageMetadata from '../components/PageMetadata'
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton'
import ResponsiveImage from '../components/blog/ResponsiveImage'
import { blogPosts } from '../data/blogPosts'
import '../styles/journal.css'

export default function BlogIndexPage({ navigate }) {
  const [featuredPost] = blogPosts

  return (
    <div className="journal-page min-h-screen bg-[#F9F6F0] font-sans text-[#263126]">
      <PageMetadata page="blog" />
      <Nav navigate={navigate} currentPage="blog" />

      <main id="main-content">
        <header className="journal-index-hero">
          <div className="journal-index-hero__rule" aria-hidden="true" />
          <div className="journal-shell journal-index-hero__content">
            <p className="journal-eyebrow">The TCTE Journal</p>
            <h1>Stories From the World of Ceylon Tea</h1>
            <p>
              Travel stories, tea culture, tasting notes and guides from The Ceylon Tea
              Experience in the heart of Galle.
            </p>
          </div>
        </header>

        <section className="journal-feature-section" aria-labelledby="featured-story-title">
          <div className="journal-shell">
            <div className="journal-section-heading">
              <p className="journal-eyebrow">Latest story</p>
              <div aria-hidden="true" />
            </div>

            <article className="journal-feature-card">
              <a
                href={featuredPost.path}
                className="journal-feature-card__image-link"
                aria-label={`Read ${featuredPost.title}`}
              >
                <ResponsiveImage
                  image={featuredPost.featuredImage}
                  className="journal-feature-card__image"
                />
              </a>

              <div className="journal-feature-card__content">
                <p className="journal-feature-card__category">
                  {featuredPost.category} <span aria-hidden="true">·</span> {featuredPost.location}
                </p>
                <h2 id="featured-story-title">
                  <a href={featuredPost.path}>{featuredPost.title}</a>
                </h2>
                <p className="journal-feature-card__excerpt">{featuredPost.excerpt}</p>
                <div className="journal-feature-card__meta">
                  <time dateTime={featuredPost.datePublished}>{featuredPost.displayDate}</time>
                  <span aria-hidden="true">·</span>
                  <span>
                    <Clock aria-hidden="true" size={15} />
                    {featuredPost.readingTime} min read
                  </span>
                </div>
                <a href={featuredPost.path} className="journal-read-link">
                  Read story <ArrowRight aria-hidden="true" size={17} />
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <WhatsAppFloatingButton />
      <Footer navigate={navigate} />
    </div>
  )
}
