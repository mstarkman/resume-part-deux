import { faEnvelope, faPhone, faFilePdf, faFileWord } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import SideNavLink from "./SideNavLink"

const links = [
  {
    href: "mailto:me@markstarkman.com?subject=Let's%20chat%20about%20your%20resume!",
    icon: faEnvelope,
    text: "me@markstarkman.com"
  },
  {
    href: "tel:2672180239",
    icon: faPhone,
    text: "267-218-0239"
  },
  {
    href: "https://github.com/mstarkman",
    icon: faGithub,
    text: "GitHub",
    newTab: true
  },
  {
    href: "https://www.linkedin.com/in/mstarkman/",
    icon: faLinkedin,
    text: "LinkedIn",
    newTab: true
  },
  {
    href: "/downloads/Mark%20Starkman%20Resume%202020.pdf",
    icon: faFilePdf,
    text: "Resume PDF Format"
  },
  {
    href: "/downloads/Mark%20Starkman%20Resume%202020.docx",
    icon: faFileWord,
    text: "Resume Microsoft Word Format"
  }
]

const SideNav = () => (
  <nav className="bg-purple-700 text-yellow-100 h-screen pt-4 flex flex-col">
    <div className="text-right font-serif text-4xl mb-4 px-6">
      Mark
      <br />
      Starkman
    </div>
    <div className="text-right">
      {links.map((link, i) => (
        <SideNavLink key={i} {...link} />
      ))}
    </div>
    <div className="text-right mt-auto">
      <SideNavLink
        href="https://github.com/mstarkman/resume-part-deux"
        icon={faGithubSquare}
        text="Wanna see the code?"
        newTab={true}
      />
    </div>
  </nav>
)

export default SideNav
