/**
 * Reserved for real research imagery. Renders a hairline bordered area with a
 * caption slot. Not currently placed anywhere on the site.
 */
export default function FigurePlaceholder({ caption, children, ratio = '16 / 9' }) {
  return (
    <figure className="m-0">
      <div
        className="flex items-center justify-center border border-rule"
        style={{ aspectRatio: ratio }}
      >
        {children}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-ink-muted prose-measure">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
