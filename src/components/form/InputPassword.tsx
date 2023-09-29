"use client";
import React from 'react'
import { PasswordInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface Props {
  value: string;
  setValue(value:string): any;
  placeholder?: string;
  label?: string;
  labelColor?:string;
  withAsterisk?: boolean;
  description?: string;
}

const InputPassword = ({
  value,
  setValue,
  placeholder,
  label = "Password",
  withAsterisk = true,
  labelColor = "#0A172E",
  description = ""
}: Props) => {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <PasswordInput
      placeholder={placeholder}
      label={label}
      labelProps={{ style: { color: labelColor, fontSize: 16 }}}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      size='lg'
      visible={visible}
      onVisibilityChange={toggle}
      withAsterisk={withAsterisk}
      description={description}
    />
  )
}

export default InputPassword