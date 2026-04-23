import React from "react";
import TextField from "../../../components/ui/TextField";
import Button from "../../../components/ui/Button";
import Select from "../../../components/ui/Select";

interface FilterSortProps {
  search: string;
  author: string;
  sort: string;
  onSearchChange: (v: string) => void;
  onAuthorChange: (v: string) => void;
  onSortChange: (v: string) => void;
  onReset: () => void;
}

const sortOptions = [
  { label: "Нові спочатку", value: "date-desc" },
  { label: "Старі спочатку", value: "date-asc" },
  { label: "Назва (А-Я)", value: "title-asc" },
  { label: "Назва (Я-А)", value: "title-desc" },
];

const FilterSort: React.FC<FilterSortProps> = ({
  search,
  author,
  sort,
  onSearchChange,
  onAuthorChange,
  onSortChange,
  onReset,
}) => {
  return (
    <form className="flex flex-wrap gap-4 items-end mb-8" onSubmit={e => e.preventDefault()}>
      <TextField
        label="Пошук"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Пошук за назвою або текстом..."
        className="w-48"
      />
      <TextField
        label="Автор"
        value={author}
        onChange={e => onAuthorChange(e.target.value)}
        placeholder="Пошук за автором..."
        className="w-48"
      />
      <Select
        label="Сортувати"
        value={sort}
        onChange={e => onSortChange(e.target.value)}
        options={sortOptions}
        className="w-48"
      />
      <Button
        type="button"
        className="h-[42px] w-48"
        onClick={onReset}
      >
        Скинути фільтри
      </Button>
    </form>
  );
};

export default FilterSort;
