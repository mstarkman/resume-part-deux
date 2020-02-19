import { FunctionComponent } from "react"

interface Props {
  title: string
}

const Section: FunctionComponent<Props> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-serif pb-1 mb-4 text-3xl border-b border-b-solid border-purple-500">{title}</h2>
    {children}
  </div>
)

export default Section
