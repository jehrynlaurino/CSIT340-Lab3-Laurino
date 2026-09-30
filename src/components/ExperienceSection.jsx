import SectionHeading from "./SectionHeading"
import TimelineItem from "./TimelineItem"

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="Where I have learned and worked."
      />

      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2023 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, systems analysis, and other IT-related subjects."
        />

        <TimelineItem
          period="2026"
          title="IT Student"
          place="Cebu Institute of Technology – University"
          description="Worked on different academic projects involving web development, databases, mobile development, and system integration."
        />

        <TimelineItem
          period="2020 – 2022"
          title="Senior High School"
          place="University of San Carlos"
          description="Started developing my interest in technology and decided to pursue Information Technology in college."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection