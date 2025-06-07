import { getAllPosts } from '@/lib/post'
import HeroSearch from './HeroSearch'

const HeroSection = async() => {
  const posts = await getAllPosts()
  return (
    <section className="relative px-6 lg:px-20 py-12 lg:py-24 bg-transparent">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Learn development<br />with great articles.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
            Find the latest of my writing here.
          </p>
          <HeroSearch posts={posts} />
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_918,q_auto,f_auto/kentcdodds.com/illustrations/skis_z5lkc3"
            alt="Illustration of skis"
            className="w-full max-w-[380px] object-contain animate-fade-in drop-shadow-xl transition-transform duration-500 ease-in-out hover:scale-105"
            style={{ aspectRatio: '0.71' }}
            crossOrigin="anonymous"
          />
        </div>

      </div>

    </section>
  )
}

export default HeroSection
