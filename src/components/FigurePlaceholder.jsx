/**
 * A research figure: a hairline bordered area with an optional caption slot.
 * With `src` it renders the image; without one it renders an empty bordered
 * area at `ratio`, reserving space for imagery that has not been supplied yet.
 */
export default function FigurePlaceholder({
  src,
  alt = '',
  caption,
  width,
  height,
  ratio = '16 / 9',
  className = '',
  children,
}) {
  return (
    <figure className={`m-0 ${className}`}>
      <div
        className="border border-rule overflow-hidden bg-surface"
        style={src ? undefined : { aspectRatio: ratio }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto"
          />
        ) : (
          <div className="flex h-full items-center justify-center">{children}</div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-ink-muted prose-measure">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
