import Section from "./Section"

const P = ({ children }) => <p className="p-2">{children}</p>

const Summary = () => (
  <Section title="Summary">
    <P>
      <strong>Senior Software Engineer, Leader, Team builder and Mentor</strong>
    </P>
    <ul className="list-disc ml-8 p-2">
      <li>Ruby on Rails – 8+ years’ experience</li>
      <li>React, jQuery and JavaScript – 6+ years’ experience</li>
      <li>Node.js – 2+ years’ experience</li>
      <li>20+ years of experience – Database Administration, Management, .Net (C#), PostgreSQL, Microsoft SQL Server</li>
    </ul>
    <P>I have always had a passion for writing clear, concise and maintainable software.</P>
    <P>
      For my next opportunity, I’ll continue to write software and I want to incorporate more mentoring and coaching of lesser
      experienced developers. My preference is to continue working remotely and I am available for work in Philadelphia area.
    </P>
  </Section>
)

export default Summary
