type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = "Search...",
}: SearchBarProps) {
  return <input type="search" placeholder={placeholder} aria-label="Search" />;
}
