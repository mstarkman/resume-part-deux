import experience from "../data/experience"

const Experience = () => (
  <>
    <h2>Experience</h2>
    <p dangerouslySetInnerHTML={{ __html: experience }}></p>
  </>
)

export default Experience
