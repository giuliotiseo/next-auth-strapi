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
  labelColor = "#0A172E"
}: Props) => {
  return (  
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      icon={<TbAt size="1.2rem" />}
      className={`text-lg ${className}`}
      label={label}
      labelProps={{ style: { color: labelColor, fontSize: 16 }}}
      size='lg'
      type='email'
      withAsterisk={withAsterisk}
      
    />
  )
}

export default InputEmail
