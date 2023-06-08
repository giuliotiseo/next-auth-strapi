import { Checkbox } from '@mantine/core'
import React, { ReactNode } from 'react'

interface Props {
  checked:boolean;
  label?: ReactNode;
  onChange(value:boolean): any;
  className?:string;
}

const InputCheckbox = ({
  checked = false,
  label,
  onChange,
  className = ""
}: Props) => {
  return (
    <Checkbox
      label={label && <>{label}</>}
      onChange={(event) => onChange(event.currentTarget.checked)}
      checked={checked}
      className={className}
    />
  )
}

export default InputCheckbox
