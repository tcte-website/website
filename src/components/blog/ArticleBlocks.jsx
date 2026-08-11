import ResponsiveImage from './ResponsiveImage'

function LinkedText({ block }) {
  if (!block.segments) return block.text

  return block.segments.map((segment, index) =>
    segment.href ? (
      <a key={`${segment.href}-${index}`} href={segment.href} className="journal-inline-link">
        {segment.text}
      </a>
    ) : (
      <span key={`text-${index}`}>{segment.text}</span>
    ),
  )
}

function ArticleFigure({ block }) {
  return (
    <figure className={`journal-figure journal-figure--${block.layout ?? 'standard'}`}>
      <ResponsiveImage image={block.image} className="journal-figure__image" />
      {block.caption && <figcaption>{block.caption}</figcaption>}
    </figure>
  )
}

export default function ArticleBlocks({ blocks }) {
  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`

    if (block.type === 'paragraph') {
      return (
        <p key={key}>
          <LinkedText block={block} />
        </p>
      )
    }

    if (block.type === 'list') {
      return (
        <ul key={key} className="journal-activity-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    }

    if (block.type === 'rhythm') {
      return (
        <div key={key} className="journal-rhythm" aria-label={block.lines.join(' ')}>
          {block.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      )
    }

    if (block.type === 'quote') {
      return (
        <blockquote key={key} className="journal-pull-quote">
          <p>
            {block.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <cite>{block.attribution}</cite>
        </blockquote>
      )
    }

    if (block.type === 'image') {
      return <ArticleFigure key={key} block={block} />
    }

    return null
  })
}
