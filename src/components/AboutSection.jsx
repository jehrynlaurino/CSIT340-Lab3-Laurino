import SectionHeading from "./SectionHeading"
import Fact from "./Fact"

function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="About"
        subtitle="A little about who I am."
      />

      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up most of my life in Talisay and have lived there ever since.
        I chose IT because I love learning technology. In the future, I want
        to visit a lot of countries and experience their culture and food.
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Fourth year" />
        <Fact label="School" value="Cebu Institute of Technology – University" />
        <Fact label="Based in" value="Talisay City, Cebu" />
      </dl>
    </section>
  )
}

export default AboutSection