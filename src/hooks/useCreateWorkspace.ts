import { CreateWorkspace } from "@/actions/workspace"
import { useMutationData } from "./useMutationData"
import useZodForm from "./useZodForm"
import { z } from "zod"

const workspaceSchema = z.object({
    name: z.string().min(1, "Workspace name is required"),
})

export const useCreateWorkspace = () => {
    const {mutate, isPending} = useMutationData(['create-workspace'], (data:{name: string})=> CreateWorkspace(data.name), 'user-workspaces')

   const {errors, onformSubmit, register} = useZodForm(workspaceSchema,mutate)
   return {errors, onformSubmit, register, isPending}
}