import Head from "next/head"
import SideNav from "../components/SideNav"
import Summary from "../components/Summary"
import Experience from "../components/Experience"
import Education from "../components/Education"
import MobileHeader from "../components/MobileHeader"

const Index = () => (
  <>
    <Head>
      <title>Mark Starkman&apos;s Resume</title>
    </Head>
    <MobileHeader />
    <div className="w-full max-w-screen-xl mx-auto px-4 md:pl-0 lg:px-6 text-gray-800">
      <div className="flex">
        <div className="hidden h-full h-auto inset-0 md:block overflow-y-visible w-1/3 z-90 sticky">
          <div className="overflow-y-auto min-h-screen scrolling-touch sticky top-0">
            <div className="overflow-y-auto h-screen">
              <SideNav />
            </div>
          </div>
        </div>
        <div className="min-h-screen max-h-full w-full static overflow-y-visible pt-20 md:pt-6 md:ml-4 lg:ml-6">
          <Summary />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  </>
)

export default Index
