import { Box, Card as RadixCard, Inset } from '@radix-ui/themes';
import type { BoxProps } from '@radix-ui/themes';

type CardProps = {
  imgHref?: string;
  title: string;
  subtitle: string;
} & BoxProps;

export function Card({ imgHref, title, subtitle, ...props }: CardProps) {
  return (
    <Box {...props}>
      <RadixCard
        size="2"
        className="transition-transform hover:scale-105 hover:cursor-pointer hover:shadow-lg"
      >
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={imgHref}
            alt={title}
            loading="lazy"
            className="block h-[140px] w-full bg-[var(--gray-5)] object-cover"
          />
        </Inset>
        <h5 className="text-2xl font-bold">{title}</h5>
        <span className="font-medium">{subtitle}</span>
      </RadixCard>
    </Box>
  );
}
