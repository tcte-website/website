import { useState } from 'react'
import { Check, Copy, Share2 } from 'lucide-react'

function trackShare(method) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'blog_share', { method })
  }
}

export default function ArticleShare({ post }) {
  const [copied, setCopied] = useState(false)
  const canonicalUrl = `https://www.theceylonteaexperience.com${post.path}`
  const encodedUrl = encodeURIComponent(canonicalUrl)
  const encodedTitle = encodeURIComponent(post.title)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl)
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = canonicalUrl
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      textArea.remove()
    }

    setCopied(true)
    trackShare('copy_link')
    window.setTimeout(() => setCopied(false), 2200)
  }

  const shareStory = async () => {
    if (!navigator.share) {
      await copyLink()
      return
    }

    try {
      await navigator.share({ title: post.title, text: post.excerpt, url: canonicalUrl })
      trackShare('native_share')
    } catch (error) {
      if (error?.name !== 'AbortError') await copyLink()
    }
  }

  return (
    <section className="journal-share" aria-labelledby="share-story-title">
      <div>
        <p className="journal-eyebrow">Pass it on</p>
        <h2 id="share-story-title">Share this story</h2>
      </div>
      <div className="journal-share__actions">
        <button type="button" onClick={shareStory} aria-label="Share this story">
          <Share2 aria-hidden="true" size={17} />
          Share
        </button>
        <button type="button" onClick={copyLink} aria-label="Copy article link">
          {copied ? <Check aria-hidden="true" size={17} /> : <Copy aria-hidden="true" size={17} />}
          {copied ? 'Copied' : 'Copy link'}
        </button>
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShare('whatsapp')}
          aria-label="Share this story on WhatsApp"
        >
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShare('facebook')}
          aria-label="Share this story on Facebook"
        >
          Facebook
        </a>
      </div>
      <span className="sr-only" aria-live="polite">{copied ? 'Article link copied to clipboard.' : ''}</span>
    </section>
  )
}
