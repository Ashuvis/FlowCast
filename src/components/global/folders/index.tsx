import React from 'react'
import FolderDuotone from '@/components/Icons/folder-duotone'
import { ArrowRight } from 'lucide-react'

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
    </div>
  )
}

export default folders