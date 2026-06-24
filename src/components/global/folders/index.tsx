import React from 'react'
import FolderDuotone from '@/components/Icons/folder-duotone'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Folder from './folder'

type Props = {
    workspaceId: string
}

const folders = (props: Props) => {
    //get all folders

  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <FolderDuotone/>
                <h2 className='text-[#BDBDBD] text-xl '>Folders</h2>
            </div>
            <div className='flex items-center gap-2 text-[#BDBDBD]'>
                <p>See All</p>
                <ArrowRight color='#707070'/>
            </div>
        </div>
        <section className={cn('flex items-center gap-4 overflow-x-auto w-full')}>
            <Folder name='Folder Title' />
        </section>
    </div>
  )
}

export default folders