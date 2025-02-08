"use client"



const Hero = () => {
  return (
    <div className="bg-red-500 w-screen h-screen">
        <video src="/banner-video-1.mp4" controls={false} autoPlay loop muted height={500} width={"100%"}
            className="w-screen"
        ></video>
    </div>
  )
}

export default Hero