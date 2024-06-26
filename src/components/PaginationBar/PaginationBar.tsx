import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationBarProps {
  page: number;
  count: number;
  handleChangePage: (page: number) => void;
}

export const PaginationBar = ({ page, count, handleChangePage }: PaginationBarProps) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    handleChangePage(value);
  };

  return (
    <Stack spacing={2} className="text-black">
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        size="large"
        sx={{
          '& .MuiPaginationItem-root': { fontSize: '1.5rem' },
          '& .Mui-selected': { backgroundColor: '#2cd4bf !important', color: 'black' },
          '& .MuiPaginationItem-root:hover': { backgroundColor: '#66ff00', color: 'black' },
        }}
      />
    </Stack>
  );
};
