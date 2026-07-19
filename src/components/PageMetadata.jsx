import { useEffect } from 'react'

const canonicalUrl = 'https://www.theceylonteaexperience.com/'

const metadata = {
  home: {
    title: 'The Ceylon Tea Experience | Interactive Tea Experience in Galle',
    description:
      'Pluck, hand-roll, taste, and blend Ceylon Tea at an interactive cultural experience in Galle, Sri Lanka, just minutes from Galle Fort.',
  },
  about: {
    title: 'About The Ceylon Tea Experience | Galle, Sri Lanka',
    description:
      'Discover how The Ceylon Tea Experience brings Sri Lanka’s tea heritage, artisanal craft, and modern hospitality to the heart of Galle.',
  },
  services: {
    title: 'Ceylon Tea Experiences & Activities | TCTE Galle',
    description:
      'Explore hands-on tea making, guided tasting, tea plucking, personalised blending, workshops, and boutique Ceylon Tea experiences in Galle.',
  },
  gallery: {
    title: 'Gallery | The Ceylon Tea Experience in Galle',
    description:
      'See the tea-making, tasting, blending, café, and group moments that make The Ceylon Tea Experience an immersive Galle attraction.',
  },
  contact: {
    title: 'Contact & Book | The Ceylon Tea Experience Galle',
    description:
      'Contact The Ceylon Tea Experience at 146A Sea Street, Galle, for availability, bookings, group visits, and WhatsApp reservations.',
  },
  privacy: {
    title: 'Privacy Policy | The Ceylon Tea Experience',
    description:
      'Read The Ceylon Tea Experience privacy policy, including how booking and website information is collected, used, and protected.',
  },
  refund: {
    title: 'Refund Policy | The Ceylon Tea Experience',
    description:
      'Review refund, date-change, and processing guidance for bookings with The Ceylon Tea Experience in Galle.',
  },
  terms: {
    title: 'Terms & Conditions | The Ceylon Tea Experience',
    description:
      'Read the website, booking, experience, payment, cancellation, and visitor terms for The Ceylon Tea Experience.',
  },
}

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector)
  if (element) {
    element.setAttribute(attribute, value)
  }
}

export default function PageMetadata({ page }) {
  useEffect(() => {
    const pageMetadata = metadata[page] ?? metadata.home
    document.title = pageMetadata.title

    setMeta('meta[name="description"]', 'content', pageMetadata.description)
    setMeta('meta[name="robots"]', 'content', 'index, follow')
    setMeta('link[rel="canonical"]', 'href', canonicalUrl)
    setMeta('meta[property="og:title"]', 'content', pageMetadata.title)
    setMeta('meta[property="og:description"]', 'content', pageMetadata.description)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)
    setMeta('meta[name="twitter:title"]', 'content', pageMetadata.title)
    setMeta('meta[name="twitter:description"]', 'content', pageMetadata.description)
  }, [page])

  return null
}
