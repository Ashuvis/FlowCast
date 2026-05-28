"use client"

import React from 'react'
import { useCreateWorkspace } from "@/hooks/useCreateWorkspace"
import { Form } from '@/components/ui/form'

type Props = {}

const Workspaceform = (props: Props) => {
    const {errors, onformSubmit, register, isPending} = useCreateWorkspace()
  return (
    <form onSubmit={onformSubmit} className='w-full flex flex-col gap-y-3'>
    </form>
  )
}

export default Workspaceform