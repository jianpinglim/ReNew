import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Diamond, Star } from "lucide-react"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-48 border-r bg-white p-6">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-orange-400">ReNew</h1>
          <nav className="space-y-4">
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Jobs
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Learn Skills
            </a>
            <a href="#" className="block rounded-lg bg-blue-100 px-4 py-2 text-blue-500">
              Profile
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-48 p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative">
              <div className="relative h-48 bg-orange-200 rounded-lg flex items-center justify-center">
              <Image
                src="/sgflag.png"
                alt="Profile Picture"
                width={227}
                height={227}
                priority
                className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-[50%]"
              />
              </div>

              {/* Profile Info */}
              <div className="mt-4 space-y-1 px-6">
                <h2 className="text-2xl font-bold">Eddie Bozmen</h2>
                <p className="text-gray-600">Born in 9 November 1989</p>
                <p className="text-gray-600">Ex-chef at DinTaiFung 2012-2017</p>
                <Image
                  src="/sgflag.png"
                  alt="Singapore"
                  width={32}
                  height={24}
                  className="mt-2 rounded"
                />
              </div>
            </div>


            {/* Skills Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Skills</h3>
              <Card className="p-4">
                <h4 className="text-lg font-semibold">Cooking</h4>
                <p className="text-gray-600">Head chef at multiple DinTaiFung outlets</p>
              </Card>
              <Card className="p-4">
                <h4 className="text-lg font-semibold">Public speaking</h4>
                <p className="text-gray-600">Motivation speaker and advocate fot the yellow ribbon</p>
              </Card>
            </section>

            {/* Achievements Section */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold">Achievements</h3>
              <Card className="flex items-center gap-4 p-4">
                <Diamond className="h-8 w-8 text-green-400" />
                <span className="font-medium">Most number of courses completed</span>
              </Card>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <Card className="p-4">
              <h3 className="mb-4 text-xl font-bold">About Me:</h3>
              <p className="text-gray-600">
                I study engineering at singapore poly then i go become chef because I failed engineering and my
                girlfriend say my food very nice. While pursing my cooking passion, bad influence intro me to the bad
                stuff therefore I ended up behind bars. I hope you can give me a chance
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="mb-6 text-xl font-bold">Course progression</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Powerpoint Skills</span>
                    <span className="text-sm text-gray-500">88%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={88} className="flex-1" />
                    <Star className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Public Speaking</span>
                    <span className="text-sm text-gray-500">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="flex-1" />
                    <Star className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

