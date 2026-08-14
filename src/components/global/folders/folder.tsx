'use client'
import React, { useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import Loader from '../loader'
import FolderDuotone from '@/components/Icons/folder-duotone'
import { useMutationData } from '@/hooks/useMutationData'

type Props = {
  name: string
  id: string
  optimistic?: boolean
  count?: number
}

const Folder = ({ name, id, optimistic, count }: Props) => {
  const pathname = usePathname()
  const router = useRouter()
  const [Rename, setRename] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const foldercardRef = useRef<HTMLDivElement | null>(null)
  const beforeRename = () => setRename(true)
  const afterRename = () => setRename(false)

  const handleFolderClick = () => {
    router.push(`${pathname}/folder/${id}`)
  }
  const handleRename = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation()
    //rename function
  }
  //Some optimistic UI stuff
  const { mutate, isPending } = useMutationData(['rename-folders'], (data: { name: string }) => renameFolders(), 'workspace-folders', afterRename)


  //WIP: add LOADING states
  return (
    <div onClick={handleFolderClick} className={cn('flex hover:bg-neutral-800 cursor-pointer transition-colors duration-150 items-center gap-2 justify-between min-w-[250px] py-6 px-4 rounded-lg border-[1px]')}>

      <Loader state={false}>
        <div className='flex flex-col gap-2'>
          <p onDoubleClick={(e) => { handleRename }} className='text-neutral-300 '>
            {name}
          </p>
          <span className='text-sm text-neutral-500 bg-neutral-500'>
            {count || 0}Videos
          </span>
        </div>
      </Loader>
      <FolderDuotone />
    </div>
  )
}

export default Folder