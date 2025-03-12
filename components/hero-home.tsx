import VideoThumb from '@/public/images/mockup-image-01.jpg'
import ModalVideoIphone from '@/components/modal-video-iphone'
import SplineScene from './SplineScene';

export default function HeroHome() {
  return (
    <section>
      <div className="max-w-[1900px] mx-auto px-6 sm:px-8 lg:px-10 2xl:px-16">
        <div className="pt-32 pb-0 md:pt-40 md:pb-0">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-6 lg:col-span-6 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-black" data-aos="fade-down">Your website, reimagined</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              {/* CTA form */}
              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                  <input type="tel" className="form-input w-full mb-2 sm:mb-0 sm:mr-2" placeholder="Phone number" aria-label="Phone number" />
                  <a className="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0" href="#0">Invite Code</a>
                </div>
                {/* Success message */}
                {/* <p className="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
              </form>
              <ul className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2" data-aos="fade-down" data-aos-delay="450">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
              </ul>
            </div>

            {/* 3D Scene */}
            <div className="md:col-span-6 lg:col-span-6">
              <SplineScene 
                url="https://my.spline.design/robotcontactme-d7513cf9e8970d08cab4ecac824c11ea/"  // robot
                // url="https://my.spline.design/brain-74544328dc9622e185c2931f91fbf2d8/" // brain
                className="w-full h-[600px] md:h-[600px]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}