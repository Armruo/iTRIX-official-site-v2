export default function Content() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Celebrities */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    Celebrities
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    AI accurately replicates voice and image, profoundly evolving personalized IP.
                  </p>
                </div>
              </div>
            </div>

            {/* Industry KOLs */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    Industry KOLs
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Smart content optimization and efficient interaction amplify influence.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Creators */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    Content Creators
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    AI-generated creative content precisely targets audiences, driving unlimited growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise Brands */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    Enterprise Brands
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    AI-powered marketing innovation precisely unlocks brand value.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
