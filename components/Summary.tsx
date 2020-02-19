import summaries from "../data/summaries"
import Section from "./Section"

const Summary = () => (
  <Section title="Summary">
    {summaries.map((summary, i) => (
      <p className="mb-3 p-2" key={i}>
        {summary}
      </p>
    ))}
  </Section>
)

export default Summary
