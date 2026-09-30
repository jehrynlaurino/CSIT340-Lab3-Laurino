import SectionHeading from "./SectionHeading"
import ContactLink from "./ContactLink"

function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Contact"
        subtitle="Say hi."
      />

      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:jehryn.laurino@cit.edu"
          text="jehryn.laurino@cit.edu"
        />

        <ContactLink
          label="GitHub"
          href="https://github.com/jehrynlaurino"
          text="github.com/jehrynlaurino"
        />

        <ContactLink
          label="LinkedIn"
          href="https://linkedin.com"
          text="LinkedIn"
        />
      </ul>
    </section>
  )
}

export default ContactSection