/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/WnVxCMxtnPB
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Cabin } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

cabin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Mainpage() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="w-full bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white">Unleash the Power of Our Campaign</h1>
              <p className="text-lg text-white">
                Join us in our mission to drive real change and make a lasting impact. Our innovative campaign offers
                unparalleled opportunities to get involved and make a difference.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-[#6c5ce7] shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  prefetch={false}>
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-[#6c5ce7] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  prefetch={false}>
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Campaign Banner"
                className="mx-auto rounded-xl shadow-lg" />
              <div
                className="absolute top-0 right-0 -mt-4 -mr-4 bg-[#a29bfe] rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl">
                🚀
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Our Campaign</h2>
                <p className="text-lg text-muted-foreground">
                  Our campaign is a transformative initiative that aims to drive real change and make a lasting impact.
                  Through innovative strategies and a dedicated team, we are committed to empowering individuals and
                  communities to achieve their goals.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  By joining our campaign, you'll have the opportunity to be part of something truly remarkable.
                  Together, we'll tackle pressing issues, inspire positive change, and create a brighter future for all.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Campaign Description"
                  className="rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
                <p className="text-lg text-muted-foreground">
                  Explore real-world examples of our campaign's impact and success stories.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-background shadow-lg rounded-xl">
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="200"
                      alt="Case Study 1"
                      className="rounded-t-xl" />
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold">Empowering Local Communities</h3>
                    <p className="text-muted-foreground">
                      Learn how our campaign transformed the lives of individuals in a local community, providing them
                      with the resources and support they needed to thrive.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}>
                      Read More
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-lg rounded-xl">
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="200"
                      alt="Case Study 2"
                      className="rounded-t-xl" />
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold">Driving Sustainable Change</h3>
                    <p className="text-muted-foreground">
                      Discover how our campaign's innovative approach led to long-term, sustainable change in a
                      community, creating a lasting impact.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}>
                      Read More
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-lg rounded-xl">
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="200"
                      alt="Case Study 3"
                      className="rounded-t-xl" />
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold">Inspiring Global Collaboration</h3>
                    <p className="text-muted-foreground">
                      Explore how our campaign brought together diverse stakeholders from around the world to tackle a
                      global challenge, showcasing the power of collective action.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}>
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Reviews and Recommendations</h2>
                <p className="text-lg text-muted-foreground">
                  Hear from influential individuals and organizations who have experienced the impact of our campaign
                  firsthand.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-background shadow-lg rounded-xl">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">John Doe</h3>
                        <p className="text-muted-foreground">CEO, Acme Inc.</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Our partnership with this campaign has been truly transformative. The level of support and
                      expertise they provided has been invaluable in driving real change within our organization."
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-lg rounded-xl">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">Sarah Miller</h3>
                        <p className="text-muted-foreground">Founder, Nonprofit Organization</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "I've been incredibly impressed by the dedication and passion of the team behind this campaign.
                      Their innovative approach and unwavering commitment to making a difference have been truly
                      inspiring."
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-lg rounded-xl">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>LW</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">Lisa Wang</h3>
                        <p className="text-muted-foreground">Director, Government Agency</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "This campaign has been a game-changer for our community. The resources and support they've
                      provided have empowered us to tackle long-standing challenges and create a brighter future for
                      all."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
                <p className="text-lg text-muted-foreground">
                  We're proud to collaborate with over 100 organizations that share our vision and commitment to driving
                  positive change.
                </p>
              </div>
              <div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8">
                {Array.from({ length: 100 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-background rounded-lg py-4 px-6 shadow-lg">
                    <img
                      src="/placeholder.svg"
                      width="120"
                      height="60"
                      alt={`Partner ${index + 1}`}
                      className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">&copy; 2024 Campaign. All rights reserved.</p>
            <nav className="flex gap-4 md:gap-6 text-sm">
              <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>)
  );
}
