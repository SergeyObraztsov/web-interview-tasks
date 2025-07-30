import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Spinner, TextField } from '@radix-ui/themes';

type SearchInput = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  isLoading: boolean;
} & TextField.RootProps;

export function SearchInput({
  value,
  onChange,
  isLoading,
  placeholder = 'Search the superhero by his name...',
  ...props
}: SearchInput) {
  return (
    <TextField.Root
      radius="large"
      color="green"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    >
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      {isLoading && (
        <TextField.Slot>
          <Spinner />
        </TextField.Slot>
      )}
    </TextField.Root>
  );
}
