import React from "react";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="bg-[url('/image/siom.jpg')] bg-cover bg-bottom p-4 text-white">
        <p className="font-bold text-4xl">
          Image is <span className="text-yellow-400">Everything</span>
          <span className="h-4 bg-yellow-400 w-20 mt-3 block"></span>
        </p>
        <div className="lg:grid grid-cols-3 sm:max-md:grid-rows-3 ">
          <div className="sm:max-md:row-span-1">
            <h1 className="font-semibold">Our Vision</h1>
            <p className="text-lg font-semibold">
              Our vision is to create beautiful, functional spaces that enhance
              the lives of our clients. We strive to provide innovative design
              solutions and high-quality workmanship that exceed our clients
              expectations and stand the test of time.
            </p>
          </div>
          <div className="sm:max-md:row-span-2">
            <h1 className="font-semibold">Our Mission</h1>
            <p className="text-lg font-semibold">
              Our mission is to provide exceptional service and workmanship on
              every project, from concept to completion. We believe in working
              collaboratively with our clients to bring their vision to life,
              and we are committed to delivering the highest level of
              professionalism, integrity, and quality in everything we do.
            </p>
          </div>
          <div className="sm:max-md:row-span-3 snap-mandatory snap-y">
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
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              class="w-screen"
              src="/image/John.jpeg"
              alt="Sunset in the mountains"
              width={300}
              height={200}
            />
            <div class="px-6 py-2">
              <div class="font-bold text-2xl text-center mb-2">John Rurua</div>
            </div>
            <div class="px-6 pb-2 text-center">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Founder and CEO
              </span>
            </div>
          </div>
        </div>
        <div className="sm:row-span-3">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              class="w-screen"
              src="/image/winnie.jpeg"
              alt=""
              width={300}
              height={200}
            />
            <div class="px-6 py-2">
              <div class="font-bold text-2xl mb-2 text-center">Winnie Mundia</div>
            </div>
            <div class="px-6 pb-2 text-center">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Socials
              </span>
            </div>
          </div>
        </div>
        <div className="sm:row-span-5">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              class="w-screen"
              src="/image/wambui.jpeg"
              alt="Sunset in the mountains"
              width={300}
              height={200}
            />
            <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2 text-center">Wambui</div>
            </div>
            <div class="px-6 pb-2 text-center">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Human Resources
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
