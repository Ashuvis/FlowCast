import { UseMutateFunction } from "@tanstack/react-query";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Value } from "@radix-ui/react-select";

const useZodForm = <TSchema extends FieldValues>(
  schema: TSchema,
  mutation: UseMutateFunction<any, any, z.output<TSchema>, any>,
  defaultValues?: DefaultValues<z.input<TSchema>>
) => {
  const { register, watch, reset, handleSubmit, formState: { errors } } = useForm<z.input<TSchema>, any, z.output<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });
 const onformSubmit = handleSubmit(async (values) => mutation({...values}))
  return { register, watch, reset, errors, onformSubmit };
};

export default useZodForm;