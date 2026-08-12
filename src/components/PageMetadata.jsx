import { useEffect } from 'react'

const siteUrl = 'https://www.theceylonteaexperience.com'
const homeCanonical = `${siteUrl}/`
const ga4MeasurementId = 'G-B23WLR63LD'
const defaultImage = `${siteUrl}/images/tcte-social-logo.jpg`
const defaultImageAlt = 'The Ceylon Tea Experience company logo'
let lastTrackedLocation = typeof window === 'undefined' ? '' : window.location.href

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
  blog: {
    title: 'The TCTE Journal | Stories From the World of Ceylon Tea',
    description:
      'Travel stories, tea culture, tasting notes and guides from The Ceylon Tea Experience in Galle, Sri Lanka.',
    canonical: `${siteUrl}/blog`,
    image: `${siteUrl}/images/blog/visit-tcte-galle/tcte-visit-galle-og.jpg`,
    imageAlt: 'Guests enjoying Ceylon Tea at The Ceylon Tea Experience in Galle',
    robots: 'index, follow, max-image-preview:large',
  },
  notFound: {
    title: 'Story Not Found | The TCTE Journal',
    description: 'Return to The TCTE Journal to explore stories and guides from the world of Ceylon Tea.',
    canonical: `${siteUrl}/blog`,
    robots: 'noindex, follow',
  },
}

function ensureMeta(attribute, key) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  return element
}

function setMeta(attribute, key, value) {
  const existing = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!value) {
    existing?.remove()
    return
  }

  ensureMeta(attribute, key).setAttribute('content', value)
}

function setCanonical(value) {
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', value)
}

function getPageMetadata(page, post) {
  if (page === 'blogArticle' && post) {
    return {
      title: post.seoTitle,
      description: post.description,
      canonical: `${siteUrl}${post.path}`,
      image: `${siteUrl}${post.socialImage}`,
      imageAlt: post.socialImageAlt,
      robots: 'index, follow, max-image-preview:large',
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      section: post.category,
    }
  }

  return metadata[page] ?? metadata.home
}

function updateStructuredData(page, post) {
  const scriptId = 'tcte-blog-structured-data'
  let script = document.getElementById(scriptId)

  if (page !== 'blogArticle' || !post) {
    script?.remove()
    return
  }

  if (!script) {
    script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  const canonical = `${siteUrl}${post.path}`
  const socialImage = `${siteUrl}${post.socialImage}`

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonical}#article`,
        headline: post.title,
        description: post.description,
        image: [socialImage],
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: {
          '@type': 'Organization',
          name: post.author,
          url: homeCanonical,
        },
        publisher: {
          '@type': 'Organization',
          name: 'The Ceylon Tea Experience',
          url: homeCanonical,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.webp`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical,
        },
        articleSection: post.category,
        keywords: post.tags.join(', '),
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: homeCanonical,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Journal',
            item: `${siteUrl}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: canonical,
          },
        ],
      },
    ],
  })
}

export default function PageMetadata({ page, post }) {
  useEffect(() => {
    const pageMetadata = getPageMetadata(page, post)
    const canonical = pageMetadata.canonical ?? homeCanonical
    const image = pageMetadata.image ?? defaultImage
    const imageAlt = pageMetadata.imageAlt ?? defaultImageAlt

    document.title = pageMetadata.title
    setCanonical(canonical)
    setMeta('name', 'description', pageMetadata.description)
    setMeta('name', 'robots', pageMetadata.robots ?? 'index, follow')
    setMeta('property', 'og:type', pageMetadata.type ?? 'website')
    setMeta('property', 'og:title', pageMetadata.title)
    setMeta('property', 'og:description', pageMetadata.description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:image:alt', imageAlt)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'article:published_time', pageMetadata.publishedTime)
    setMeta('property', 'article:modified_time', pageMetadata.modifiedTime)
    setMeta('property', 'article:section', pageMetadata.section)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', pageMetadata.title)
    setMeta('name', 'twitter:description', pageMetadata.description)
    setMeta('name', 'twitter:image', image)
    setMeta('name', 'twitter:image:alt', imageAlt)
    updateStructuredData(page, post)

    const currentLocation = window.location.href
    if (currentLocation !== lastTrackedLocation && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        send_to: ga4MeasurementId,
        page_title: pageMetadata.title,
        page_location: currentLocation,
        page_referrer: lastTrackedLocation,
      })
    }
    lastTrackedLocation = currentLocation
  }, [page, post])

  return null
}
