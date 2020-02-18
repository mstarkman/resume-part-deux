import experiences from "../data/experiences"
import Details from "./Details"
import Section from "./Section"

const Experience = () => (
  <Section title="Experience">
    {experiences.map((experience, i) => (
      <Details key={i} {...experience} />
    ))}
  </Section>
)

export default Experience
