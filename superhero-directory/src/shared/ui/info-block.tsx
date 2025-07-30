import { ReloadIcon } from '@radix-ui/react-icons';
import { Heading, Text } from '@radix-ui/themes';

type InfoBlockProps = {
  title?: string;
  text?: string;
  icon?: React.ReactNode;
};

export function InfoBlock({
  title = 'Error occurred',
  text = 'Try to change search input',
  icon = <ReloadIcon height="24" width="24" />,
}: InfoBlockProps) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          {icon}
          <Heading as="h6">{title}</Heading>
        </div>
        <Text color="gray">{text}</Text>
      </div>
    </div>
  );
}
