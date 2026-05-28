import React from 'react'

type Props = { type?: 'text'|'email'|'password'|'number'
    inputType: 'select'|'textarea'|'input'
}

const FormGenerator = (props: Props) => {
  return (
    <div>FormGenerator</div>
  )
}

export default FormGenerator