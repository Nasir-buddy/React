import React from 'react'
import { FaFileCode } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    <motion.div
      drag dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={.1}
      className='relative w-60 h-72 rounded-[40px] bg-zinc-900/80 text-white overflow-hidden px-8 py-10'
      dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
    >
      <FaFileCode />
      <p className='font-semibold text-sm leading-tight mt-5'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5>{data.fileSize}</h5>
          <span className='w-7 h-7 rounded-full  bg-zinc-600 flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff' />}
          </span>
        </div>
        {
          data.tag.isOpen && (<div className={`tag w-full py-4 h-10 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>)
        }
      </div>
    </motion.div>
  )
}

export default Card 