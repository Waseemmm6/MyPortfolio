import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import {SiMongodb} from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri";
 import {FaNodeJs} from "react-icons/fa"
 import { FaHtml5 } from "react-icons/fa";
 import { FaCss3 } from "react-icons/fa";
 import { DiMysql } from "react-icons/di";
function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
     <h1 className='my-20 text-center text-4xl'>Technologies</h1>
     <div className='flex flex-wrap items-center justify-center gap-4'>
       <div class="rounded-2xl border-4 border-neutral-800 p-4">
       <RiReactjsLine className='text-7xl text-cyan-400'/>
       </div>
       <div class="rounded-2xl border-4 border-neutral-800 p-4">
       <IoLogoJavascript className='text-7xl'/>
       </div>
       <div class="rounded-2xl border-4 border-neutral-800 p-4">
       <SiMongodb className='text-7xl text-green-500'/>
       </div>
       <div class="rounded-2xl border-4 border-neutral-800 p-4">
       <RiTailwindCssFill className='text-7xl text-red-700'/>
       </div>
       <div class="rounded-2xl border-4 border-neutral-800 p-4">
       <FaNodeJs className='text-7xl text-green-400'/>
       </div>
       <div class="rounded-2xl border-4 border-neutral-800 p-4">
       <FaHtml5 className='text-7xl text-cyan-400'/>
       </div>
       <div class="rounded-2xl border-4 border-neutral-800 p-4">
       <FaCss3 className='text-7xl text-cyan-400'/>
       </div>
       <div class="rounded-2xl border-4 border-neutral-800 p-4">
       <DiMysql className='text-7xl text-cyan-400'/>
       </div>
       

     </div>
    </div>
  )
}

export default Technologies