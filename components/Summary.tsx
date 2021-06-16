import Section from "./Section"

const P = ({ children }) => <p className="p-2">{children}</p>

const Summary = () => (
  <Section title="Summary">
    <P>
      I am a long-time technologist who has years of experience at all layers of the tech stack. I am most proficient with the Ruby
      on Rails stack and I have utilized it across various industries. Most recently, I’ve been working as a Site Reliability
      Engineer engaged with engineering teams to improve observability and improve developer processes.
    </P>
    <P>
      I am a builder! I love to create and build new and creative features, functionality, and tooling. Using regular feedback from
      users, I improve the products to make it more useful and beneficial.
    </P>
    <P>
      Whether as a team lead or an individual contributor, I am most comfortable working as part of a team that is all working
      towards the same goals. Working as part of a team and having my breadth of knowledge provides me with the ability to coach and
      mentor lesser experienced technologists to level up the entire team.
    </P>
    <P>
      I am passionate about working remotely as it enabled me to do the work that I love while saving on my commute time. This has
      allowed me the opportunity to grow as a technologist by continuously learning about new technologies and techniques from my
      own home.
    </P>
  </Section>
)

export default Summary
