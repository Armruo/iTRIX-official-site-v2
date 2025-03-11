import SplineScene from './SplineScene';

export default function HeroBlockChain() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Blockchain </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div> */}

          <div className="md:w-[840px]">
              <SplineScene 
                url="https://my.spline.design/shiny3dcoinlogoanimation-c9083c127dfd32ad51911825592922d0/"  // chain
                className="w-full h-[600px] md:h-[800px]"
              />
            </div>


        </div>
      </div>
    </section>
  )
}