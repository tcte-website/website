const imageBase = '/images/blog/visit-tcte-galle'

export const blogImages = {
  overview: {
    src: `${imageBase}/tcte-tea-experience-overview.webp`,
    srcSet: `${imageBase}/tcte-tea-experience-overview-640.webp 640w, ${imageBase}/tcte-tea-experience-overview.webp 1200w`,
    width: 1200,
    height: 1500,
    sizes: '(min-width: 1024px) 42vw, 100vw',
    alt: 'Collage showing tea estate walking, tea processing, blending, tasting and shopping at The Ceylon Tea Experience',
  },
  guestsAndTeam: {
    src: `${imageBase}/tcte-guests-and-team.webp`,
    srcSet: `${imageBase}/tcte-guests-and-team-640.webp 640w, ${imageBase}/tcte-guests-and-team.webp 720w`,
    width: 720,
    height: 1280,
    sizes: '(min-width: 1024px) 600px, 100vw',
    alt: 'A guest with the TCTE team during a tea experience in Galle',
  },
  processingOne: {
    src: `${imageBase}/tcte-hands-on-tea-processing-01.webp`,
    srcSet: `${imageBase}/tcte-hands-on-tea-processing-01-640.webp 640w, ${imageBase}/tcte-hands-on-tea-processing-01.webp 1080w`,
    width: 1080,
    height: 1440,
    sizes: '(min-width: 1024px) 760px, 100vw',
    alt: 'Guests taking part in hands-on tea processing at The Ceylon Tea Experience',
  },
  processingTwo: {
    src: `${imageBase}/tcte-hands-on-tea-processing-02.webp`,
    srcSet: `${imageBase}/tcte-hands-on-tea-processing-02-640.webp 640w, ${imageBase}/tcte-hands-on-tea-processing-02.webp 1080w`,
    width: 1080,
    height: 1440,
    sizes: '(min-width: 1024px) 760px, 100vw',
    alt: 'Three guests using tea-processing equipment during an interactive Ceylon Tea session',
  },
  tastingGuests: {
    src: `${imageBase}/tcte-tea-tasting-guests.webp`,
    srcSet: `${imageBase}/tcte-tea-tasting-guests-640.webp 640w, ${imageBase}/tcte-tea-tasting-guests.webp 1080w`,
    width: 1080,
    height: 1440,
    sizes: '(min-width: 1024px) 760px, 100vw',
    alt: 'Visitors preparing Ceylon Tea together during a guided experience in Galle',
  },
  enjoyingTea: {
    src: `${imageBase}/tcte-guests-enjoying-ceylon-tea.webp`,
    srcSet: `${imageBase}/tcte-guests-enjoying-ceylon-tea-640.webp 640w, ${imageBase}/tcte-guests-enjoying-ceylon-tea.webp 1080w`,
    width: 1080,
    height: 1440,
    sizes: '(min-width: 1280px) 1200px, 100vw',
    alt: 'Guests enjoying freshly brewed Ceylon Tea at The Ceylon Tea Experience',
  },
}

const article = {
  slug: 'why-you-should-visit-the-ceylon-tea-experience-in-galle',
  path: '/blog/why-you-should-visit-the-ceylon-tea-experience-in-galle',
  title: 'Why You Should Visit The Ceylon Tea Experience in Galle, Sri Lanka',
  seoTitle: 'Why Visit The Ceylon Tea Experience in Galle, Sri Lanka',
  description:
    'Discover a hands-on Ceylon Tea experience in Galle where you can pluck, make, taste and blend tea just minutes from Galle Fort.',
  excerpt:
    "Discover a hands-on way to experience Ceylon Tea on Sri Lanka's Southern Coast — without having to travel deep into the hill country.",
  deck:
    "Experience Sri Lanka's iconic Ceylon Tea culture through a hands-on journey of plucking, making, tasting and blending — right in the heart of Galle.",
  category: 'Travel Guide',
  location: 'Galle',
  tags: ['Ceylon Tea', 'Galle', 'Sri Lanka travel', 'Tea tasting'],
  datePublished: '2026-08-11',
  dateModified: '2026-08-11',
  displayDate: '11 August 2026',
  author: 'The Ceylon Tea Experience',
  featuredImage: blogImages.tastingGuests,
  heroImage: blogImages.enjoyingTea,
  socialImage: `${imageBase}/tcte-visit-galle-og.jpg`,
  socialImageAlt: blogImages.enjoyingTea.alt,
  intro: [
    {
      type: 'paragraph',
      text: 'The first impression many people have when they think of Sri Lanka is Ceylon Tea. From misty mountain plantations to carefully brewed cups served around the world, tea is deeply woven into the island’s identity.',
    },
    {
      type: 'paragraph',
      text: 'But what if you could experience the journey of the leaf without travelling deep into Sri Lanka’s hill country?',
    },
    {
      type: 'paragraph',
      text: 'That is exactly what makes The Ceylon Tea Experience in Galle different.',
    },
    {
      type: 'paragraph',
      segments: [
        {
          text: 'Located in the heart of Galle, around 300 metres from the iconic Galle Fort, The Ceylon Tea Experience brings the story of Sri Lankan tea to the Southern Coast. Instead of simply drinking a cup of tea or walking through a traditional factory, visitors become part of the ',
        },
        { text: 'tea-making journey', href: '/#services' },
        { text: ' themselves.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Here, you can learn, touch, smell, taste, make and blend tea — then take home your own creation.',
    },
  ],
  sections: [
    {
      id: 'experience-ceylon-tea-in-galle',
      heading: 'Experience Ceylon Tea Without Travelling to the Tea Country',
      blocks: [
        {
          type: 'paragraph',
          text: 'For many travellers, experiencing Sri Lankan tea means travelling to destinations such as Nuwara Eliya, Kandy or Ella to visit plantations and tea factories.',
        },
        {
          type: 'paragraph',
          text: 'While the hill country is undoubtedly beautiful, reaching it can require considerable time, especially when you have a limited itinerary.',
        },
        {
          type: 'paragraph',
          text: 'This is where The Ceylon Tea Experience offers something completely different.',
        },
        {
          type: 'paragraph',
          text: 'You do not have to travel into the mountains to discover how Ceylon Tea is made. By visiting Galle, a few hours from Colombo, you can take part in an interactive tea journey while remaining close to one of Sri Lanka’s most popular visitor destinations.',
        },
        {
          type: 'paragraph',
          text: 'The experience brings the essence of Sri Lanka’s tea country to the Southern Coast, making it an ideal activity for travellers exploring Galle, the south coast or the island beyond.',
        },
      ],
    },
    {
      id: 'convenient-stop-for-travellers',
      heading: 'A Convenient Stop for International Travellers',
      blocks: [
        { type: 'paragraph', text: 'Location matters when you are travelling.' },
        {
          type: 'paragraph',
          text: 'For visitors arriving through Bandaranaike International Airport in Katunayake, Galle is a popular gateway to Sri Lanka’s Southern Coast. Rather than adding a separate journey into the central highlands purely for a tea experience, travellers can include The Ceylon Tea Experience in their Galle itinerary.',
        },
        {
          type: 'paragraph',
          text: 'Galle is approximately 125 kilometres from Colombo, with the journey generally taking two to three hours depending on traffic and transport. The city is also a major stop for travellers heading towards destinations along the Southern Coast.',
        },
        {
          type: 'paragraph',
          text: 'That makes a tea experience in Galle especially convenient for visitors who are already travelling south.',
        },
        {
          type: 'paragraph',
          text: 'Because The Ceylon Tea Experience is close to Galle Fort, it can easily become part of a day exploring the historic city.',
        },
        {
          type: 'rhythm',
          lines: ['Explore the Fort.', 'Walk along the ramparts.', 'Discover the cafés and boutiques.', 'Then step into the world of Ceylon Tea.'],
        },
        {
          type: 'image',
          image: blogImages.guestsAndTeam,
          caption: 'A warm welcome is part of the experience in Galle.',
          layout: 'portrait',
        },
      ],
    },
    {
      id: 'experience-ceylon-tea',
      heading: 'Don’t Just Drink Ceylon Tea — Experience It',
      blocks: [
        {
          type: 'paragraph',
          text: 'There is a big difference between drinking tea and understanding tea.',
        },
        {
          type: 'paragraph',
          text: 'At The Ceylon Tea Experience, visitors are invited to become part of the process.',
        },
        {
          type: 'paragraph',
          text: 'The journey begins with understanding the tea leaf and continues through the craftsmanship involved in turning that leaf into the tea we know and love.',
        },
        { type: 'paragraph', text: 'Guests can take part in activities including:' },
        {
          type: 'list',
          items: [
            'Hand-plucking tea leaves',
            'Learning about the tea-making process',
            'Hand-rolling tea leaves',
            'Drying and processing tea',
            'Learning about different tea grades',
            'Tasting different Ceylon Teas',
            'Creating personalised tea blends',
            'Exploring different flavours and aromas',
            'Taking their own tea creation home',
          ],
        },
        {
          type: 'paragraph',
          text: 'The result is much more than a sightseeing activity. It is an opportunity to understand the craftsmanship behind one of Sri Lanka’s most famous exports.',
        },
        {
          type: 'image',
          image: blogImages.processingOne,
          caption: 'Guests do more than observe: they take part in the tea-making process.',
          layout: 'breakout',
        },
      ],
    },
    {
      id: 'make-your-own-ceylon-tea',
      heading: 'Make Your Own Ceylon Tea',
      blocks: [
        {
          type: 'paragraph',
          text: 'One of the highlights of the experience is the opportunity to make your own tea.',
        },
        {
          type: 'paragraph',
          text: 'Rather than simply watching someone demonstrate the process, you get to participate.',
        },
        {
          type: 'paragraph',
          text: 'You can work with the tea leaves, use traditional techniques and see how the process transforms the leaves into something you can brew and enjoy.',
        },
        {
          type: 'paragraph',
          text: 'For many visitors, this becomes the most memorable part of the experience — because you do not leave with photographs and memories alone.',
        },
        { type: 'paragraph', text: 'You can leave with tea that you made yourself.' },
        {
          type: 'image',
          image: blogImages.processingTwo,
          caption: 'Hands-on tea processing turns the visit into a personal experience.',
          layout: 'standard',
        },
      ],
    },
    {
      id: 'discover-sri-lankan-tea-flavours',
      heading: 'Discover the Flavours of Sri Lankan Tea',
      blocks: [
        {
          type: 'paragraph',
          text: 'Ceylon Tea is far from a single flavour — it is a journey through a remarkable range of aromas, tastes and characteristics.',
        },
        {
          type: 'paragraph',
          text: 'Sri Lanka’s different tea-growing regions, elevations, processing techniques and grades contribute to this fascinating variety.',
        },
        {
          type: 'paragraph',
          segments: [
            { text: 'The guided ' },
            { text: 'tea tasting', href: '/#services' },
            {
              text: ' gives visitors an opportunity to explore this diversity and understand why Sri Lankan tea has earned such a strong reputation internationally.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'You may discover that a tea you previously thought you did not enjoy tastes completely different when you understand where it comes from, how it was processed and how it should be brewed.',
        },
        {
          type: 'paragraph',
          text: 'This makes the experience especially valuable for tea lovers and complete beginners alike. You do not need to be a tea expert to enjoy it; you simply need to be curious.',
        },
        {
          type: 'image',
          image: blogImages.tastingGuests,
          caption: 'Preparing and tasting tea together reveals new flavours and aromas.',
          layout: 'breakout',
        },
      ],
    },
    {
      id: 'create-your-own-tea-blend',
      heading: 'Create a Tea Blend That Is Yours',
      blocks: [
        {
          type: 'paragraph',
          text: 'Another unique part of The Ceylon Tea Experience is the opportunity to create your own personalised tea blend.',
        },
        {
          type: 'paragraph',
          segments: [
            { text: 'Instead of choosing a ready-made tea from a shelf, you can explore different ingredients, flavours and aromas to ' },
            { text: 'create a blend', href: '/#services' },
            { text: ' that matches your own taste.' },
          ],
        },
        { type: 'paragraph', text: 'It turns tea into a personal experience.' },
        {
          type: 'quote',
          lines: ['You choose.', 'You blend.', 'You taste.'],
          attribution: 'The Ceylon Tea Experience',
        },
        { type: 'paragraph', text: 'And you can take your creation home.' },
        {
          type: 'paragraph',
          text: 'This personalised approach is one of the reasons the experience feels different from a conventional tea factory tour or tea tasting.',
        },
      ],
    },
  ],
}

function blockText(block) {
  if (block.text) return block.text
  if (block.segments) return block.segments.map((segment) => segment.text).join(' ')
  if (block.items) return block.items.join(' ')
  if (block.lines) return block.lines.join(' ')
  return ''
}

export function calculateReadingTime(post) {
  const sectionText = post.sections
    .flatMap((section) => [section.heading, ...section.blocks.map(blockText)])
    .join(' ')
  const introText = post.intro.map(blockText).join(' ')
  const wordCount = `${post.title} ${post.deck} ${introText} ${sectionText}`
    .trim()
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.ceil(wordCount / 220))
}

export const blogPosts = [{ ...article, readingTime: calculateReadingTime(article) }]

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
