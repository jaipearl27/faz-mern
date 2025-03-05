

import Image from "next/image";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
export default  function ContactSection(){
return (
    <div className=" ">
        <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 overflow-hidden ">
            <Image src="/contact-us.png"      
            alt="customer support respresntative  with headset"
            fill
            className=" object-center"
            priority         
        />          
            
               </div>
 {/* Contact Us Heading */}
 <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold">
          <span className="text-amber-400">CO</span>
          <span className="text-gray-400">NTACT</span>
          <span className="text-black"> US</span>
        </h2>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Website Card */}
  <a href="https://www.vprots.com" target="_blank" rel="noopener noreferrer" className="h-full">
    <div className="bg-[#6a9a6b] text-white p-6 rounded-md flex flex-col items-center justify-center hover:opacity-90 transition h-full min-h-[150px]">
      <Globe className="h-6 w-6 mb-2" title="Website" />
      <p className="text-sm">www.vprots.com</p>
    </div>
  </a>

  {/* Mobile Card */}
  <a href="tel:+971509490496" className="h-full">
    <div className="bg-[#7fb0b2] text-white p-6 rounded-md flex flex-col items-center justify-center hover:opacity-90 transition h-full min-h-[150px]">
      <Phone className="h-6 w-6 mb-2" title="Phone" />
      <p className="text-sm">Mobile: +971 50 949 0496</p>
    </div>
  </a>

  {/* Email Card */}
  <div className="bg-[#9a9a9a] text-white p-6 rounded-md flex flex-col items-center justify-center hover:opacity-90 transition h-full min-h-[150px]">
    <Mail className="h-6 w-6 mb-2" title="Email" />
    <div className="space-y-1 text-center">
      <a href="mailto:biz@vprots.com" className="text-sm block hover:underline">biz@vprots.com</a>
      <a href="mailto:connect@vprots.com" className="text-sm block hover:underline">connect@vprots.com</a>
      <a href="mailto:project@vprots.com" className="text-sm block hover:underline">project@vprots.com</a>
    </div>
  </div>

  {/* Address Card */}
  <div className="bg-[#e6b94d] text-white p-6 rounded-md flex flex-col items-center justify-center hover:opacity-90 transition h-full min-h-[150px]">
    <MapPin className="h-6 w-6 mb-2" title="Address" />
    <div className="space-y-1 text-center">
      <p className="text-sm">Business Center 1, M Floor</p>
      <p className="text-sm">The Meydan Hotel, NAD</p>
      <p className="text-sm">Al Sheba Dubai, UAE</p>
    </div>
  </div>
</div>

    </div>
  );
}