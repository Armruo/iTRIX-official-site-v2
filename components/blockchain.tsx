import Image from 'next/image'
import SplineScene from './SplineScene';

export default function HeroBlockChain() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Web3 区块链解决方案</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              提供高性能、安全可靠的区块链基础设施和智能合约开发服务，助力企业快速实现Web3转型
            </p>
          </div>

          <div className="flex flex-wrap items-center">
            {/* 3D Animation */}
            <div className="w-full lg:w-6/12 mb-12 lg:mb-0">
              <SplineScene 
                url="https://my.spline.design/shiny3dcoinlogoanimation-c9083c127dfd32ad51911825592922d0/"
                className="w-full h-[400px] md:h-[500px]"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-6/12 px-4"> 
              <div className="lg:ml-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                  <h3 className="h4 font-red-hat-display mb-4">核心优势</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-teal-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">高性能架构</h4>
                        <p className="text-gray-600 dark:text-gray-400">支持每秒数千次交易处理，满足企业级应用需求</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-teal-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">安全可靠</h4>
                        <p className="text-gray-600 dark:text-gray-400">多重加密技术保护，确保数据和资产安全</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-teal-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">快速部署</h4>
                        <p className="text-gray-600 dark:text-gray-400">一站式解决方案，助力企业快速实现区块链集成</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}