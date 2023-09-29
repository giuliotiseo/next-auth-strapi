import { notifications } from '@mantine/notifications';
import { TbCheck, TbX } from 'react-icons/tb';

interface ToastProps {
  id: string;
  title: string;
  message: string;
}

export const toastError = ({id, title, message }: ToastProps) => {
  notifications.show({
    id,
    withCloseButton: true,
    autoClose: 5000,
    title,
    message,
    color: 'red',
    icon: <TbX />,
    loading: false,
  });
}

export const toastSuccess = ({id, title, message }: ToastProps) => {
  notifications.show({
    id,
    withCloseButton: true,
    autoClose: 5000,
    title,
    message,
    color: 'green',
    icon: <TbCheck />,
    loading: false,
  });
}