"use client"


import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/core/carousel';
function index() {
  const OPTIONS = { loop: true };
  return (
    <>
      <>
        <Carousel options={OPTIONS} isAutoPlay={true} className="w-[95%] rounded-xl  mx-auto pt-5">
          <SliderContainer className="gap-2">
            <Slider className="w-full">
              <div className="rounded-xl h-[80vh] w-full" style={{ background: 'url("/shipping.jpg")', backgroundSize: 'cover' }} ></div>
            </Slider>
            <Slider className="w-full">
              <div className="rounded-xl h-[80vh] w-full" style={{ background: 'url("/banner2.jpg")', backgroundSize: 'cover' }} ></div>
            </Slider>
            <Slider className="w-full">
              <div className="rounded-xl h-[80vh] w-full" style={{ background: 'url("/bed.jpg")', backgroundSize: 'cover' }} ></div>

            </Slider>
            <Slider className="w-full">
              <div className="rounded-xl h-[80vh] w-full" style={{ background: 'url("/banner2.jpg")', backgroundSize: 'cover' }} ></div>
            </Slider>
          </SliderContainer>
          <div className="flex justify-center py-4">
            <SliderDotButton />
          </div>
        </Carousel>
      </>
    </>
  );
}
export default index;
