import { AnchorHTMLAttributes, FunctionComponent } from "react"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconDefinition
  text: string
  newTab?: boolean
  beforeNav?: () => void
}

const SideNavLink: FunctionComponent<Props> = ({ text, icon, beforeNav, href, newTab = false, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = e => {
    if (beforeNav) {
      beforeNav()
    }
  }

  return (
    <a
      className="text-sm xl:text-base hover:bg-yellow-300 hover:text-purple-700 w-full inline-block px-3 lg:px-6 py-1 md:py-2"
      {...props}
      target={newTab ? "_blank" : null}
      href={href}
      onClick={handleClick}
    >
      <FontAwesomeIcon className="mr-2" icon={icon} />
      {text}
    </a>
  )
}

export default SideNavLink
