export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16 md:py-24">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
