import { FunctionComponent } from "react"

interface Props {
  title: string
}

const Section: FunctionComponent<Props> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-serif mb-4 text-3xl">{title}</h2>
    {children}
  </div>
)

export default Section
