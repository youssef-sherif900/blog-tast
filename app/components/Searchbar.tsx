'use client';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    onSearch(newQuery);
  };

  return (
    <div className="mb-4">
      <label htmlFor="search" className="sr-only">Search posts</label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        placeholder="Search posts..."
        className="w-full p-2 border rounded"
        aria-label="Search posts"
      />
    </div>
  );
}

