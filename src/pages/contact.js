import { useForm, handleSubmit } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:mariasrenovators@gmail.com?subject=Message from ${data.name}&body=${data.message}. Phone Number: ${data.phone}, Email: ${data.email}`;
  };
  return (
    <div className="bg-black  xl:grid grid-cols-2 gap-4 sm:max-sm:grid-rows-2 px-4 py-4">
      <div className="col-span-2 py-12">
        <p className="text-5xl text-white font-bold text-center">Contact Us</p>
      </div>
      <div className="pt-12">
        <div className="font-bold text-white"></div>
        <p className="text-white">
          Graham,United States
        </p>
        <hr className="text-white"></hr>
        <p className="text-md text-white">
          <span className="text-yellow-400 font-bold">Mobile:</span> +1 (253)-271-1253
        </p>
        <hr className="text-white"></hr>
        <p className="text-md text-white">
          <span className="text-yellow-400 font-bold">Cell Phone:</span> (774) 823 1253
        </p>
        <hr className="text-white"></hr>
        <p className="text-md text-white">
          <span className="text-yellow-400 font-bold">Email:</span>{" "}
          mariasrenovators@gmail.com
        </p>
        <hr className="text-white"></hr>
        <p className="text-md text-white">
          <span className="text-yellow-400 font-bold">Web: </span>{" "}
          mariasrenovators.com
        </p>
        <hr className="text-white"></hr>
      </div>

      <div className="sm:row-span-5 border rounded border-slate-200 bg-[#F5F5F5] my-12 py-5 px-5">
        <p className="text-xl">Send us a Message</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border border-slate-300 p-2 focus-within:outline-yellow-400"
            type="text"
            placeholder="Your Name"
            {...register("name")}
          />
          <input
            className="border border-slate-300 p-2 focus-within:outline-yellow-400"
            type="text"
            placeholder="Your Phone"
            {...register("phone")}
          />

          <input
            className="border border-slate-300 p-2 focus:border-yellow-400 focus-within:outline-yellow-400"
            type="text"
            placeholder="Your Email"
            {...register("email")}
          />

          <textarea
            className="flex justify-start border border-slate-300 px- py-10 focus-within:outline-yellow-400"
            type="text"
            placeholder="Message"
            {...register("message")}
          />

          <button className="md:max-xl:bg-black text-white border border-[#333] w-15 hover:bg-yellow-400">
            Submit
          </button>
        </form>
      </div>
      <p className="text-white col-span-2 text-center text-2xl font-bold pb-20">
        We Would Love To Work With You
      </p>
    </div>
  );
}
