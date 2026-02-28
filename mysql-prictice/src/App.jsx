import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"


export default function App() {
    const { register, reset, formState : { errors}, handleSubmit } = useForm();

    const submit = async (data) => {
      console.log(data);
      
    }
  
  return (
    <>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col justify-self-center pt-7 pb-5">
        <div className=" flex-col flex mt-6 w-max h-m justify-self-center">
          <label className="font-[Arial] text-[20px] mb-1" >username</label>
          <input type="text" className="font-[Arial] text-[16px] px-3 w-70 h-9 border-none bg-[#cccc]"  />
        </div>
        <div className=" flex-col flex mt-6 w-max h-m justify-self-center">
          <label className="font-[Arial] text-[20px] mb-1" >email</label>
          <input type="text" className="font-[Arial] text-[16px] px-3 w-70 h-9 border-none bg-[#cccc]"  />
        </div>
        <div className=" flex-col flex mt-6 w-max h-m justify-self-center">
          <label className="font-[Arial] text-[20px] mb-1" >password</label>
          <input type="text" className="font-[Arial] text-[16px] px-3 w-70 h-9 border-none bg-[#cccc]"  />
        </div>
        <button type="submit" className="bg-[darkblue] py-2 text-white font-bold font-[Arial] text-[20px] mt-7">Register</button>
      </form>
    </>
  )
}
