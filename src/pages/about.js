import React from "react";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="bg-[url('/image/bg-14.jpg')] bg-cover bg-center p-4 text-white">
        <p className="font-bold text-4xl">
          Image is <span className="text-yellow-400">Everything</span>
          <span className="h-4 bg-yellow-400 w-20 mt-3 block"></span>
        </p>
        <div className="lg:grid grid-cols-3 sm:max-md:grid-rows-3 ">
          <div className="sm:max-md:row-span-1">
            <h1 className="font-semibold">Our Vision</h1>
            <p className="text-lg">
              Our vision is to create beautiful, functional spaces that enhance
              the lives of our clients. We strive to provide innovative design
              solutions and high-quality workmanship that exceed our clients
              expectations and stand the test of time.
            </p>
          </div>
          <div className="sm:max-md:row-span-2">
            <h1 className="font-semibold">Our Mission</h1>
            <p className="text-lg">
              Our mission is to provide exceptional service and workmanship on
              every project, from concept to completion. We believe in working
              collaboratively with our clients to bring their vision to life,
              and we are committed to delivering the highest level of
              professionalism, integrity, and quality in everything we do.
            </p>
          </div>
          <div className="sm:max-md:row-span-3">
            <Image src="/image/bg-15.jpg" alt="" width={400} height={300} />
          </div>
        </div>
      </div>
      <div className="bg-white p-5 lg:grid grid-cols-5 gap-4 sm:max-sm:grid-rows-5">
        <div className="sm:row-span-1">
          <p className="font-bold text-3xl text-black">
            Our Team<span className="h-4 bg-yellow-400 w-20 mt-3 block"></span>
          </p>
        </div>
        <div className="sm:row-span-2">
          <Image
            className="border rounded-full overflow-hidden"
            src="/image/John.jpeg"
            alt=""
            width={200}
            height={300}
          />
          <p className="text-md">John</p>
          <p className="text-md">Founder & CEO</p>
          <span className="h-4 bg-yellow-400 w-20 mt-3 block"></span>
        </div>
        <div className="sm:row-span-3">
          <Image
            className="border rounded-full"
            src="/image/wambui.jpeg"
            alt=""
            width={300}
            height={300}
          />
          <p className="text-md">Wambui</p>
          <p className="text-slate-400">Human Resource</p>
          <span className="h-4 bg-yellow-400 w-20 mt-3 block"></span>
        </div>
        <div className="sm:row-span-4">
          <Image
            className="border rounded-full"
            src="https://ca.slack-edge.com/T039KG69K-U03V0N804HE-a1af50c10b55-192"
            alt=""
            width={300}
            height={300}
          />
          <p className="text-md">Winnie</p>
          <p className="text-slate-400">Project Manager</p>
          <span className="h-4 bg-yellow-400 w-20 mt-3 block"></span>
        </div>
        <div className="sm:row-span-5">
          <Image
            className="border rounded-full"
            src="/image/winnie.jpeg"
            alt=""
            width={300}
            height={300}
          />
          <p className="text-md">Lumumba</p>
          <p className="text-slate-400">Construction Manger</p>
          <span className="h-4 bg-yellow-400 w-20 mt-3 block"></span>
        </div>
      </div>
    </>
  );
}

export default About;
