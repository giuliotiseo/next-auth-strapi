import { TextInput } from '@mantine/core';
import { TbAt } from 'react-icons/tb';

interface Props {
  value: string;
  setValue(value:string): any;
  className?:string;
  label?:string;
  withAsterisk?: boolean;
  labelColor?: string;
}

const InputEmail = ({
  value,
  setValue,
  className = "",
  label = "Email",
  withAsterisk = false,
  labelColor = "white"
}: Props) => {
  return (  
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      icon={<TbAt size="0.8rem" />}
      className={`text-lg ${className}`}
      label={label}
      labelProps={{ style: { color: labelColor, fontSize: 14 }}}
      size='lg'
      type='email'
      withAsterisk={withAsterisk}
      
    />
  )
}

export default InputEmail
