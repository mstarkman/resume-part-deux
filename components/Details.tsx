import { FunctionComponent } from "react"

interface Props {
  title: string
  dates: string
  place: string
  location: string
  bullets?: string[]
}

const renderBullets = (bullets: string[] = []) => {
  if (!bullets.length) return null

  return (
    <ul className="list-disc ml-6">
      {bullets.map((bullet, i) => (
        <li className="mb-2" key={i}>
          {bullet}
        </li>
      ))}
    </ul>
  )
}

const Details: FunctionComponent<Props> = ({ title, dates, place, location, bullets }) => (
  <div className="mb-10 p-2">
    <div className="flex justify-between mb-3">
      <div className="flex-col">
        <div className="text-xl font-bold">{title}</div>
        <div>{place}</div>
      </div>
      <div className="flex-col">
        <div className="text-right">{dates}</div>
        <div className="text-right">{location}</div>
      </div>
    </div>
    {renderBullets(bullets)}
  </div>
)

export default Details
