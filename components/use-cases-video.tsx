import VideoThumb from '@/public/images/video-testimonial.jpg'
import ModalVideo from '@/components/modal-video'

export default function UseCasesVideo() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="h1 font-red-hat-display mb-4" data-aos="fade-down">AI replaces manpower—create your exclusive digital avatar in X steps!</p>
          </div>
        </div>
      </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>
      </div>
    </section>
  )
}