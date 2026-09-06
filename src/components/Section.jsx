export default function Section({ label, id, children, as: Tag = 'section' }) {
  return (
    <Tag id={id} className="border-t border-rule py-14 md:py-24">
      {label ? <h2 className="section-label mb-8 md:mb-10">{label}</h2> : null}
      {children}
    </Tag>
  );
}
