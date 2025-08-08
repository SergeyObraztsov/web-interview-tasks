import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { Box, Card as RadixCard, Inset, IconButton } from '@radix-ui/themes';
import type { BoxProps } from '@radix-ui/themes';

import { FavoriteButton } from './favorite-button';

type CardProps = {
  imgHref?: string;
  title: string;
  subtitle: string;
  isFavorite?: boolean;
  onIconButtonClick?: () => void;
} & BoxProps;

export function Card({
  imgHref,
  title,
  subtitle,
  isFavorite,
  onIconButtonClick,
  ...props
}: CardProps) {
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

        <div className="flex w-full justify-between">
          <h5 className="text-2xl font-bold">{title}</h5>

          {onIconButtonClick && (
            <FavoriteButton
              isFavorite={!!isFavorite}
              onIconButtonClick={onIconButtonClick}
            />
          )}
        </div>

        <span className="font-medium">{subtitle}</span>
      </RadixCard>
    </Box>
  );
}
