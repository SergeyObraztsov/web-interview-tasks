import { Box, Card as RadixCard, Inset, Text, Heading } from '@radix-ui/themes';
import type { BoxProps } from '@radix-ui/themes';

type CardProps = {
  imgHref: string;
  title: string;
  subtitle: string;
  onClick: () => void;
} & BoxProps;

export function Card({
  imgHref,
  title,
  subtitle,
  onClick,
  ...props
}: CardProps) {
  return (
    <Box onClick={onClick} {...props}>
      <RadixCard
        size="2"
        className="transition-transform hover:scale-105 hover:cursor-pointer hover:shadow-lg"
      >
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={imgHref}
            alt="Bold typography"
            className="block h-[140px] w-full bg-[var(--gray-5)] object-cover"
          />
        </Inset>
        <Heading as="h5">{title}</Heading>
        <Text as="p" size="3">
          {subtitle}
        </Text>
      </RadixCard>
    </Box>
  );
}
