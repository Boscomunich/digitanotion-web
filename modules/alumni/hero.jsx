export function AlumniHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-pretty mb-6">
          Meet Our <span className="text-primary">Alumni</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
          Our graduates are building the future across tech companies, startups,
          and enterprises worldwide. Discover where Digitanotion alumni are
          making an impact.
        </p>
      </div>
    </section>
  );
}
