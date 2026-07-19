import { useEffect } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

const experienceHighlights = [
  'A cultural, educational, and interactive tea experience in Galle, Sri Lanka',
  'Hands-on tea plucking and traditional handmade tea preparation',
  'Guided Ceylon Tea tasting, including how black, green, and white teas differ',
  'Build Your Own Tea with a personalised blend to take home',
  'Boutique tea retail with memorable take-home experiences',
  'Suitable for international guests, couples, families, and small groups',
  'Indoor and weather-friendly, with easy inclusion in Galle itineraries',
];

const partnerTypes = [
  'Hotels',
  'Travel Agents',
  'Tour Operators',
  'Tour Guides',
  'DMCs',
  'Concierge Teams',
];

const experienceDurations = [
  { name: 'Handmade Tea Tour', duration: '45–60 minutes' },
  { name: 'Tea Tasting Tour', duration: '20–30 minutes' },
  { name: 'Tea Plucking / Plantation Tour', duration: '60 minutes' },
  { name: 'Handmade Tea Tour + Tea Tasting Tour', duration: '90 minutes' },
  { name: 'Full combined experience', duration: '150 minutes' },
  { name: 'Build Your Own Tea', duration: '15 minutes' },
];

const guestGuidance = [
  'Comfortable casual clothing is recommended',
  'Avoid delicate, expensive, or very light-coloured clothing',
  'Comfortable or closed footwear is recommended',
  'Natural tea stains may occur and are generally washable',
  'Hot water, warm surfaces, and moving equipment may be present',
  'Children must be supervised and guests should follow staff guidance',
  'Please arrive on time; photography is welcome',
  'Natural outdoor areas may contain insects or other small organisms',
];

const pricingRows = [
  {
    name: 'Hand Made Tea Tour (HMTT)',
    duration: '45–60 mins',
    mrp: 'USD 20',
    commission: '20%',
    notes: 'Both green and black tea for an additional USD 5',
  },
  {
    name: 'Tea Tasting Tour (TTT)',
    duration: '20–30 mins',
    mrp: 'USD 20',
    commission: '20%',
    notes: '—',
  },
  {
    name: 'Plantation Tour (PT)',
    duration: '60 mins',
    mrp: 'USD 35',
    commission: '20%',
    notes: '—',
  },
  {
    name: 'Combo 01 (HMTT + TTT)',
    duration: '1.5 hrs',
    mrp: 'USD 40',
    commission: '20%',
    notes: 'Customer discount available',
  },
  {
    name: 'Combo 02 (HMTT + TTT + PT)',
    duration: '2.5 hrs',
    mrp: 'USD 75',
    commission: '20%',
    notes: 'Customer discount available',
  },
];

const partnerCommissions = [
  { type: 'Travel Agents', commission: '20%' },
  { type: 'Tour Operators', commission: '20%' },
  { type: 'Tour Guides', commission: '20%' },
  { type: 'Tea Library purchases', commission: '20% on all products' },
];

const downloads = [
  {
    label: 'Experience Resource',
    title: 'Full Fact Sheet',
    description:
      'Complete overview of The Ceylon Tea Experience, available activities, durations, ideal guests, selling points, and location information.',
    href: `${import.meta.env.BASE_URL}downloads/partners/tcte-fact-sheet.pdf`,
    button: 'Download Full Fact Sheet',
  },
  {
    label: 'Guest Resource',
    title: 'Guest Notes',
    description:
      'Clothing recommendations, visitor guidance, safety information, etiquette, and natural-environment notes.',
    href: `${import.meta.env.BASE_URL}downloads/partners/tcte-guest-notes.pdf`,
    button: 'Download Guest Notes',
  },
  {
    label: 'Commercial Resource',
    title: 'MRP & Commission Structure',
    description:
      'Experience pricing, booking slots, agent commissions, partner terms, and settlement information.',
    href: `${import.meta.env.BASE_URL}downloads/partners/tcte-pricing-commission-structure.pdf`,
    button: 'Download Pricing & Commission Guide',
  },
];

const bookingMessage =
  'Hello TCTE, I am contacting you as a travel or hospitality partner. Please help me with experience availability, bookings, and partner information.';

export default function PartnersPage() {
  useEffect(() => {
    const previousTitle = document.title
    const partnerDescription =
      'Unlisted partner resource for The Ceylon Tea Experience, including experience details, guest guidance, pricing, commissions, and booking information.'
    const partnerUrl = 'https://www.theceylonteaexperience.com/partners'
    const managedTags = [
      ['meta[name="description"]', 'content', partnerDescription],
      ['meta[name="robots"]', 'content', 'noindex, nofollow, noarchive, nosnippet'],
      ['link[rel="canonical"]', 'href', partnerUrl],
      ['meta[property="og:title"]', 'content', 'TCTE Partner Information'],
      ['meta[property="og:description"]', 'content', partnerDescription],
      ['meta[property="og:url"]', 'content', partnerUrl],
      ['meta[name="twitter:title"]', 'content', 'TCTE Partner Information'],
      ['meta[name="twitter:description"]', 'content', partnerDescription],
    ]
    const previousValues = managedTags.map(([selector, attribute]) => {
      const element = document.head.querySelector(selector)
      return [element, attribute, element?.getAttribute(attribute) ?? '']
    })

    document.title = 'TCTE Partner Information'

    managedTags.forEach(([selector, attribute, value]) => {
      document.head.querySelector(selector)?.setAttribute(attribute, value)
    })

    return () => {
      document.title = previousTitle
      previousValues.forEach(([element, attribute, value]) => {
        element?.setAttribute(attribute, value)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F9F6F0] font-sans text-gray-800">
      <a
        href="#partner-main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-24 bg-[#1A3D1A] px-4 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
      >
        Skip to partner information
      </a>
      <header className="sticky top-0 z-50 border-b border-[#1A3D1A]/10 bg-[#F9F6F0]/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 py-3 md:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}logo.webp`}
              alt="The Ceylon Tea Experience"
              width="256"
              height="256"
              className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16"
            />
            <div className="min-w-0 border-l border-[#1A3D1A]/20 pl-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#806707]">
                TCTE
              </p>
              <p className="truncate font-serif text-base font-bold text-[#1A3D1A] md:text-lg">
                Partner Information
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openWhatsApp(bookingMessage)}
            className="shrink-0 cursor-pointer rounded-sm border-2 border-[#2D6A2D] px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#2D6A2D] transition hover:bg-[#2D6A2D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D6A2D] sm:px-6 sm:text-xs"
          >
            Contact TCTE
          </button>
        </div>
      </header>

      <main id="partner-main-content">
        <section className="relative isolate overflow-hidden bg-[#1A3D1A] px-5 py-24 text-white md:px-8 md:py-32">
          <div
            className="absolute inset-0 -z-10 opacity-25"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #B8960C 0, transparent 28%), radial-gradient(circle at 80% 70%, #2D6A2D 0, transparent 35%)',
            }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.35em] text-[#D3AE24]">
              TCTE Partner Resource
            </p>
            <h1 className="mb-8 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
              The Ceylon Tea Experience
              <span className="mt-2 block text-[#D3AE24]">Partner Information</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 md:text-xl">
              Essential experience information, guest guidance, pricing, booking details, and
              downloadable partner resources.
            </p>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-24" aria-labelledby="partner-overview-heading">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#806707]">
                Experience Summary
              </p>
              <h2
                id="partner-overview-heading"
                className="mb-5 font-serif text-4xl font-bold text-[#2D6A2D] md:text-5xl"
              >
                Experience Overview
              </h2>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                A compact, partner-ready introduction to an immersive Ceylon Tea experience in
                the heart of Galle.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <article className="border border-gray-100 bg-white p-7 shadow-sm md:p-10">
                <h3 className="mb-6 font-serif text-2xl font-bold text-[#1A3D1A]">
                  Why guests choose TCTE
                </h3>
                <ul className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base">
                  {experienceHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 font-bold text-[#806707]" aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="border border-gray-100 bg-white p-7 shadow-sm md:p-10">
                <h3 className="mb-6 font-serif text-2xl font-bold text-[#1A3D1A]">
                  Experiences &amp; durations
                </h3>
                <dl className="divide-y divide-[#1A3D1A]/10">
                  {experienceDurations.map((experience) => (
                    <div
                      key={experience.name}
                      className="flex flex-col justify-between gap-1 py-4 first:pt-0 sm:flex-row sm:gap-6"
                    >
                      <dt className="text-sm font-bold text-[#1A3D1A] md:text-base">
                        {experience.name}
                      </dt>
                      <dd className="shrink-0 text-sm text-gray-600 md:text-base">
                        {experience.duration}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </div>

            <div className="mt-8 border-l-4 border-[#B8960C] bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-bold text-[#1A3D1A]">Partner types</p>
              <ul className="flex flex-wrap gap-3" aria-label="TCTE partner types">
                {partnerTypes.map((partnerType) => (
                  <li
                    key={partnerType}
                    className="border border-[#1A3D1A]/15 bg-[#F9F6F0] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2D6A2D]"
                  >
                    {partnerType}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="border-y border-[#1A3D1A]/10 bg-white px-5 py-20 md:px-8 md:py-24"
          aria-labelledby="guest-information-heading"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#806707]">
                Before Arrival
              </p>
              <h2
                id="guest-information-heading"
                className="mb-5 font-serif text-4xl font-bold text-[#2D6A2D] md:text-5xl"
              >
                Guest Information
              </h2>
              <p className="leading-relaxed text-gray-600">
                Friendly preparation notes to help guests enjoy a comfortable and memorable
                visit.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {guestGuidance.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border border-gray-100 bg-[#F9F6F0] p-5 text-sm leading-relaxed text-gray-700 shadow-sm"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D6A2D] text-xs font-bold text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-24" aria-labelledby="pricing-heading">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#806707]">
                  Valid for 2026 Summer
                </p>
                <h2
                  id="pricing-heading"
                  className="mb-5 font-serif text-4xl font-bold text-[#2D6A2D] md:text-5xl"
                >
                  Pricing &amp; Commissions
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Public MRP and partner commission information supplied for the stated 2026
                  period. All prices below are in USD.
                </p>
              </div>
              <div className="border-l-4 border-[#B8960C] bg-white px-5 py-4 text-sm leading-relaxed text-gray-600 shadow-sm lg:max-w-sm">
                Prices, discounts, and MRPs may change without prior notice. Confirm current
                availability and terms before quoting or booking.
              </div>
            </div>

            <div className="overflow-x-auto border border-[#1A3D1A]/10 bg-white shadow-sm">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  TCTE experience pricing and agent commission structure for 2026 Summer
                </caption>
                <thead className="bg-[#1A3D1A] text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-xs uppercase tracking-wider">
                      Experience
                    </th>
                    <th scope="col" className="px-5 py-4 text-xs uppercase tracking-wider">
                      Duration
                    </th>
                    <th scope="col" className="px-5 py-4 text-xs uppercase tracking-wider">
                      Public MRP
                    </th>
                    <th scope="col" className="px-5 py-4 text-xs uppercase tracking-wider">
                      Agent Commission
                    </th>
                    <th scope="col" className="px-5 py-4 text-xs uppercase tracking-wider">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A3D1A]/10">
                  {pricingRows.map((row) => (
                    <tr key={row.name} className="align-top transition-colors hover:bg-[#F9F6F0]">
                      <th scope="row" className="px-5 py-5 text-sm font-bold text-[#1A3D1A]">
                        {row.name}
                      </th>
                      <td className="px-5 py-5 text-sm text-gray-600">{row.duration}</td>
                      <td className="px-5 py-5 text-sm font-bold text-[#1A3D1A]">{row.mrp}</td>
                      <td className="px-5 py-5 text-sm font-bold text-[#806707]">
                        {row.commission}
                      </td>
                      <td className="px-5 py-5 text-sm text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              The same public MRP applies to walk-in guests and hotel-referred guests. Walk-ins
              remain subject to availability, and advance booking is recommended.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
              <article className="border border-gray-100 bg-white p-7 shadow-sm">
                <h3 className="mb-5 font-serif text-2xl font-bold text-[#1A3D1A]">
                  Booking Slots
                </h3>
                <div className="space-y-5 text-sm text-gray-600">
                  <div>
                    <p className="mb-2 font-bold text-[#2D6A2D]">HMTT &amp; TTT start times</p>
                    <p>9.30am · 11.00am · 1.30pm · 3.00pm</p>
                  </div>
                  <div>
                    <p className="mb-2 font-bold text-[#2D6A2D]">Plantation Tour start times</p>
                    <p>10.00am · 12.30pm · 2.00pm</p>
                  </div>
                  <p className="leading-relaxed">
                    Availability should be confirmed. Pre-booking is recommended.
                  </p>
                </div>
              </article>

              <article className="border border-gray-100 bg-white p-7 shadow-sm">
                <h3 className="mb-5 font-serif text-2xl font-bold text-[#1A3D1A]">
                  Partner Commission
                </h3>
                <dl className="divide-y divide-[#1A3D1A]/10">
                  {partnerCommissions.map((item) => (
                    <div key={item.type} className="flex justify-between gap-5 py-3 first:pt-0">
                      <dt className="text-sm text-gray-600">{item.type}</dt>
                      <dd className="text-right text-sm font-bold text-[#806707]">
                        {item.commission}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-sm leading-relaxed text-gray-600">
                  Increased commission percentages are available for Combo 01 and Combo 02.
                  Please confirm the current applicable rate directly with TCTE.
                </p>
              </article>

              <article className="border border-gray-100 bg-white p-7 shadow-sm">
                <h3 className="mb-5 font-serif text-2xl font-bold text-[#1A3D1A]">
                  Booking &amp; Settlement
                </h3>
                <ul className="space-y-4 text-sm leading-relaxed text-gray-600">
                  <li className="flex gap-3">
                    <span className="font-bold text-[#806707]" aria-hidden="true">✓</span>
                    Bookings are accepted from agents, operators, and guides by phone or WhatsApp.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#806707]" aria-hidden="true">✓</span>
                    Walk-in bookings are accepted subject to availability.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#806707]" aria-hidden="true">✓</span>
                    Commission settlements are made daily.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#806707]" aria-hidden="true">✓</span>
                    Pre-registration is required.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          className="bg-[#1A3D1A] px-5 py-20 text-white md:px-8 md:py-24"
          aria-labelledby="partner-downloads-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D3AE24]">
                Partner Downloads
              </p>
              <h2
                id="partner-downloads-heading"
                className="mb-5 font-serif text-4xl font-bold md:text-5xl"
              >
                Detailed Resources
              </h2>
              <p className="leading-relaxed text-white/75">
                Download the original documents for full experience, guest, pricing, and
                commission information.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {downloads.map((download) => (
                <article
                  key={download.title}
                  className="flex flex-col border border-white/15 bg-white p-7 text-gray-800 shadow-xl"
                >
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#806707]">
                    {download.label}
                  </p>
                  <h3 className="mb-3 font-serif text-2xl font-bold text-[#1A3D1A]">
                    {download.title}
                  </h3>
                  <p className="mb-7 flex-1 text-sm leading-relaxed text-gray-600">
                    {download.description}
                  </p>
                  {download.requestOnly ? (
                    <button
                      type="button"
                      onClick={() => openWhatsApp(bookingMessage)}
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#2D6A2D] px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#1A3D1A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8960C]"
                    >
                      {download.button}
                      <span aria-hidden="true">→</span>
                    </button>
                  ) : (
                    <a
                      href={download.href}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#2D6A2D] px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#1A3D1A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8960C]"
                    >
                      {download.button}
                      <span aria-hidden="true">↓</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-24" aria-labelledby="partner-contact-heading">
          <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden bg-white shadow-xl lg:grid-cols-2">
            <div className="bg-[#2D6A2D] p-8 text-white md:p-12">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#F5E3A1]">
                Reservations
              </p>
              <h2
                id="partner-contact-heading"
                className="mb-5 font-serif text-4xl font-bold md:text-5xl"
              >
                Contact &amp; Booking
              </h2>
              <p className="mb-8 leading-relaxed text-white/80">
                Confirm current pricing, partner terms, availability, and guest bookings directly
                with the TCTE reservations team.
              </p>
              <button
                type="button"
                onClick={() => openWhatsApp(bookingMessage)}
                className="cursor-pointer rounded-sm border-2 border-[#F5E3A1] px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#F5E3A1] transition hover:bg-[#F5E3A1] hover:text-[#1A3D1A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Message on WhatsApp
              </button>
            </div>

            <address className="space-y-7 p-8 text-sm not-italic text-gray-600 md:p-12 md:text-base">
              <div>
                <p className="mb-2 font-serif text-xl font-bold text-[#1A3D1A]">
                  The Ceylon Tea Experience – Galle
                </p>
                <p>146A Sea Street</p>
                <p>Galle 80000</p>
                <p>Sri Lanka</p>
              </div>
              <div className="space-y-3 border-t border-[#1A3D1A]/10 pt-6">
                <p>
                  <span className="font-bold text-[#1A3D1A]">Phone / WhatsApp: </span>
                  <a className="transition hover:text-[#806707]" href="tel:+94702900500">
                    +94 (0) 702 900 500
                  </a>
                </p>
                <p className="break-words">
                  <span className="font-bold text-[#1A3D1A]">Email: </span>
                  <a
                    className="transition hover:text-[#806707]"
                    href="mailto:reservations@theceylonteaexperience.com"
                  >
                    reservations@theceylonteaexperience.com
                  </a>
                </p>
                <p className="break-words">
                  <span className="font-bold text-[#1A3D1A]">Website: </span>
                  <a
                    className="transition hover:text-[#806707]"
                    href="https://www.theceylonteaexperience.com"
                  >
                    www.theceylonteaexperience.com
                  </a>
                </p>
              </div>
            </address>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#102B16] px-5 py-8 text-center text-xs text-white/60 md:px-8">
        <p>© 2026 EXPACE PVT LTD. All rights reserved. Partner resource</p>
      </footer>
    </div>
  );
}
