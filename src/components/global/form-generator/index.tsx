import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { Key } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

type Props = { type?: 'text'|'email'|'password'|'number'
    inputType: 'select'|'textarea'|'input'
    options?: {
  id: string
  label: string
  value: string
}[]
    label?: string
    placeholder?: string
    register: UseFormRegister<any>
    name: string
    errors:FieldErrors<FieldValues>;
    lines?: number;
}
const FormGenerator = ({inputType, options, label, placeholder, register, name, errors, lines,type}: Props) => {
  switch (inputType) {
    case 'input':
      return(
     <Label className='flex flex-col gap-2 text-[#9d9d9d]' htmlFor={`input-${name}`}>
      
      {label && label}
      <Input
        id={`input-${name}`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="bg-transparent border-themeGray text-themeTextGray"/>
        <ErrorMessage errors={errors} name={name} render={({ message }) => (
          <p className="text-red-500 text-sm">{message === 'Required' ? 'This field is required' : message}</p>
        )} />
      </Label>
      )
      case 'select':
        return(
          <Label className='flex flex-col gap-2 text-[#9d9d9d]' htmlFor={`select-${label}`}>
            {label && label}
            <select id={`select-${label}`} {...register(name)} className="bg-transparent border-themeGray text-themeTextGray p-2 rounded-md">
              {options?.length && options.map((option) => (
                <option key={option.id} value={option.value}>{option.label}</option>
              ))}
              </select>
              <ErrorMessage errors={errors} name={name} render={({ message }) => ( <p className="text-red-500 text-sm">{message === 'Required' ? 'This field is required' : message}</p> )} />
              </Label>
        )
      case 'textarea':
        return(
          <Label
          className="flex flex-col gap-2"
          htmlFor={`input-${label}`}
        >
          {label && label}
          <textarea
            className="bg-transparent border-themeGray text-themeTextGray"
            id={`input-${label}`}
            placeholder={placeholder}
            rows={lines}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
        )
    default:
      break
  }
}
export default FormGenerator