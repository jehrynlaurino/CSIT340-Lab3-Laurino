import SectionHeading from "./SectionHeading"
import ProjectCard from "./ProjectCard"

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Projects"
        subtitle="Things I have built."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/jehrynlaurino/CSIT340-Lab1-Laurino"
        />

        <ProjectCard
          year="2026"
          title="Taskly"
          description="An all-in-one productivity app concept designed for students."
          tech="UI/UX · Figma"
          link="https://github.com/jehrynlaurino"
        />

        <ProjectCard
          year="2026"
          title="Inventory System"
          description="A modular inventory application with a React frontend and Spring Boot backend."
          tech="React · Spring Boot · Supabase"
          link="https://github.com/jehrynlaurino"
        />

        <ProjectCard
          year="2026"
          title="Student Profile App"
          description="An Android application for displaying student profile information."
          tech="Java · Android Studio"
          link="https://github.com/jehrynlaurino"
        />
      </div>
    </section>
  )
}

export default ProjectsSection