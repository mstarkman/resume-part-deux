import summaries from "../data/summaries"
import Section from "./Section"

const Summary = () => (
  <Section title="Summary">
    {summaries.map((summary, i) => (
      <p className="mb-5" key={i}>
        {summary}
      </p>
    ))}
  </Section>
)

export default Summary
