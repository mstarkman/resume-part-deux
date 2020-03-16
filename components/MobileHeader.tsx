import { useState } from "react"
import SideNavLink from "./SideNavLink"
import { navLinks, navLinkRepo } from "./SideNav"

const MobileHeader = () => {
  const [navShown, setNavShown] = useState(false)

  const toggleNavShown = () => {
    navShown ? setNavShown(false) : setNavShown(true)
  }

  return (
    <div className="md:hidden bg-purple-700 text-yellow-100 fixed w-full px-5 py-4">
      <div className="flex justify-between">
        <div className="font-serif text-2xl">Mark Starkman</div>
        <div className="flex flex-col justify-center">
          <button className="flex flex-col pr-2" onClick={toggleNavShown}>
            <div className="border-2 border-yellow-100 rounded-full w-0 h-0 mb-1"></div>
            <div className="border-2 border-yellow-100 rounded-full w-0 h-0 mb-1"></div>
            <div className="border-2 border-yellow-100 rounded-full w-0 h-0"></div>
          </button>
        </div>
      </div>
      {navShown ? (
        <div className="md:hidden bg-purple-700 mt-4 pt-2 border-t border-yellow-100">
          {navLinks.map((link, i) => (
            <SideNavLink key={i} {...link} />
          ))}
          <SideNavLink {...navLinkRepo} />
        </div>
      ) : null}
    </div>
  )
}

export default MobileHeader
