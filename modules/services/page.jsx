import Hero from '../components/Hero'
import WebDevSection from '../components/WebDevSection'

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold mb-6">Our Services</h1>
        <WebDevSection />
      </main>
    </>
  )
}
