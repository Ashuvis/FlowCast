"use client"

import React from 'react'
import { useCreateWorkspace } from "@/hooks/useCreateWorkspace"
import { Form } from '@/components/ui/form'
import FormGenerator from '@/components/global/form-generator'
import { Button } from '@/components/ui/button'
import Loader from '@/components/global/loader'

type Props = {}

const Workspaceform = (props: Props) => {
    const {errors, onformSubmit, register, isPending} = useCreateWorkspace()
  return (
    <form onSubmit={onformSubmit} className='w-full flex flex-col gap-y-3'>
      <FormGenerator name="name" placeholder={'Workspace Name'} errors={errors} inputType='input' type='text' register={register}/>
      <Button type="submit" disabled={isPending} className='text-sm w-full mt-2 border-[#9d9d9d]-500 border-2 hover:bg-[#9d9d9d]-500 hover:text-white transition-colors duration-300'>
      <Loader state={isPending}>
        Create Workspace
      </Loader>
      </Button>
    </form>
  )
}

export default Workspaceform