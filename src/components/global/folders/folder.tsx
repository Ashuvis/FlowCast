'use client'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import Loader from '../loader'
import FolderDuotone from '@/components/Icons/folder-duotone'
import { useMutationData } from '@/hooks/useMutationData'
import { renameFolder } from '@/actions/workspace'
import { Input } from '@/components/ui/input'

type Props = {
  name: string
  id: string
  optimistic?:boolean
  count?: number
}

const Folder = ({id, name, optimistic, count}: Props) => {
  const pathName = usePathname()
  const router = useRouter();
  const [onRename, setOnRename] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const folderCardRef = useRef<HTMLDivElement>(null)
  const Rename=()=>setOnRename(true)
  const Renamed=()=>setOnRename(false)
  const {mutate,isPending}= useMutationData(['rename-folders'], (data:{name:string})=>renameFolder(id,name), 'workspace-folders',Renamed)



  const handleFolderclick= ()=>{
    router.push(`${pathName}/folder/${id}`)
  }
  const handleNameDoubleclick = (e: React.MouseEvent<HTMLParagraphElement>)=>{
    e.stopPropagation()
    Rename()
    //rename functionality
  }

  const updateFolderName = (e: React.FocusEvent<HTMLInputElement>)=>{
    if(inputRef.current && folderCardRef.current){
      if(!inputRef.current.contains(e.target as Node | null) && !folderCardRef.current.contains(e.target as Node | null) ){
        if(inputRef.current.value){
          mutate({name:inputRef.current.value})
        }else Renamed()
      }
    }
  }
  //add loading states 
    return (
    <div onClick={handleFolderclick} className={cn("flex hover:bg-neutral-800 cursor-pointer transition duration-150 items-center gap-2 justify-between min-w-62.5 py-4 px-4 rounded-lg border")}>
      <Loader state={false} >
        <div className='flex flex-col gap-1'>
        {onRename?<Input onBlur={(e: React.FocusEvent<HTMLInputElement>)=>{updateFolderName(e)}} autoFocus placeholder={name} className='border-none  text-base w-full outline-none text-neutral-300 bg-transparent p-0' ref={inputRef} />:<p onClick={(e)=>{handleFolderclick}} onDoubleClick={(e)=>{handleNameDoubleclick}} className='text-[#BDBDBD] '>{name}</p>}
          
          <span className='text-sm text-neutral-500'>{count} videos</span>
        </div>
      </Loader>
      <FolderDuotone/>
      </div>
  )
}

export default Folder