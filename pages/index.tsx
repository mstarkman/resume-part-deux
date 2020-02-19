import Head from "next/head"
import SideNav from "../components/SideNav"
import Summary from "../components/Summary"
import Experience from "../components/Experience"
import Education from "../components/Education"

const Index = () => (
  <>
    <Head>
      <title>Mark Starkman&apos;s Resume</title>
    </Head>
    <div className="w-full max-w-screen-xl mx-auto px-6 text-gray-800">
      <div className="flex">
        <div className="min-h-screen overflow-y-visible w-1/3 z-90 sticky">
          <div className="overflow-y-auto min-h-screen scrolling-touch sticky top-0">
            <div className="overflow-y-auto h-screen">
              <SideNav />
            </div>
          </div>
        </div>
        <div className="min-h-screen max-h-full w-full static overflow-y-visible pt-6 ml-6">
          <Summary />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  </>
)

export default Index
