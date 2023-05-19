import React, { FC, HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>
{
  backgroundColor:string;
  label:string;
}
const Button: FC<ButtonProps> = () => {
  return (
    <button>Button</button>
  )
}

export default Button