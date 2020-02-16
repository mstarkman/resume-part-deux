import SideNav from "../components/SideNav"
import Summary from "../components/Summary"
import TopNav from "../components/TopNav"
import Experience from "../components/Experience"
import Education from "../components/Education"

const Index = () => (
  <div className="w-full max-w-screen-xl mx-auto px-6">
    <TopNav />
    <div className="flex">
      <div className="h-auto overflow-y-visible w-1/4 static z-90 sticky">
        <div className="overflow-y-auto h-auto scrolling-touch sticky top-0">
          <div className="overflow-y-auto">
            <SideNav />
          </div>
        </div>
      </div>
      <div className="min-h-screen max-h-full w-full w-3/4 static overflow-y-visible">
        <Summary />
        <Experience />
        <Education />
      </div>
    </div>
  </div>
)

export default Index
