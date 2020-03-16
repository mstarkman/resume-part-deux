import { AnchorHTMLAttributes, FunctionComponent } from "react"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconDefinition
  text: string
  newTab?: boolean
}

const SideNavLink: FunctionComponent<Props> = ({ text, icon, newTab = false, ...props }) => (
  <a
    className="text-sm xl:text-base hover:bg-yellow-300 hover:text-purple-700 w-full inline-block px-3 lg:px-6 py-1 md:py-2"
    {...props}
    target={newTab ? "_blank" : null}
  >
    <FontAwesomeIcon className="mr-2" icon={icon} />
    {text}
  </a>
)

export default SideNavLink
