import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { IconButton, IconButtonProps } from '@radix-ui/themes';

type FavoriteButtonProps = {
  isFavorite: boolean;
  onIconButtonClick: () => void;
} & IconButtonProps;

export function FavoriteButton({
  isFavorite,
  onIconButtonClick,
  ...props
}: FavoriteButtonProps) {
  return (
    <IconButton
      size="1"
      variant="ghost"
      color="green"
      onClick={(e) => {
        e.stopPropagation();
        onIconButtonClick();
      }}
      {...props}
    >
      {isFavorite ? (
        <StarFilledIcon width="18" height="18" />
      ) : (
        <StarIcon width="18" height="18" />
      )}
    </IconButton>
  );
}
