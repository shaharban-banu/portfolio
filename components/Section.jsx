export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-16 px-6 py-16 md:py-24">
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
