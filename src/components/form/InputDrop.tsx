import { Group, Text, useMantineTheme, rem } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { TbPhoto, TbUpload, TbX } from 'react-icons/tb';

interface Props extends DropzoneProps {
  className?:string;
}

export function InputDrop(props: Partial<Props>) {
  const theme = useMantineTheme();
  const { className } = props;
  
  return (
    <Dropzone
      className={`${className}`}
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <TbUpload
            size="3.2rem"
            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <TbX
            size="3.2rem"
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <TbPhoto size="3.2rem" />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Trascina il file o clicca qui
          </Text>
          <Text size="sm" color="white" inline mt={7}>
            Il file che vuoi caricare non può superare il limite di 2MB
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}