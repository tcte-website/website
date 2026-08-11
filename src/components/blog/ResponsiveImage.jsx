export default function ResponsiveImage({
  image,
  className = '',
  loading = 'lazy',
  fetchPriority,
}) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      className={className}
    />
  )
}
