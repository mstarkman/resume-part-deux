import education from "../data/education"
import Details from "./Details"
import Section from "./Section"

const Education = () => (
  <Section title="Education">
    <Details {...education} />
  </Section>
)

export default Education
