'use client'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Loader from '../loader'
import FolderDuotone from '@/components/Icons/folder-duotone'

type Props = {
  name: string
  id: string
  optimistic?:boolean
  count?: number
}

const Folder = ({id, name, optimistic, count}: Props) => {
  const pathName = usePathname()
  const router = useRouter();

  //add loading states 
    return (
    <div onClick={()=>console.log('running')} className={cn("flex hover:bg-neutral-800 cursor-pointer transition duration-150 items-center gap-2 justify-between min-w-62.5 py-4 px-4 rounded-lg border")}>
      <Loader state={false} >
        <div className='flex flex-col gap-1'>
          <p onClick={()=>{console.log('redirect')}} onDoubleClick={(e)=>{console.log("fired")}} className='text-[#BDBDBD] '>{name}</p>
          <span className='text-sm text-neutral-500'>{count} videos</span>
        </div>
      </Loader>
      <FolderDuotone/>
      </div>
  )
}

export default Folder