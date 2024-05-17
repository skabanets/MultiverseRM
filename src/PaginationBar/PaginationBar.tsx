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
    <Stack spacing={2} className="text-black mt-10">
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        size="large"
        sx={{
          '& .MuiPaginationItem-root': { fontSize: '1.5rem' },
          '& .Mui-selected': { backgroundColor: '#38B2AC', color: 'white' },
          '& .MuiPaginationItem-root:hover': { backgroundColor: '#66ff00', color: 'black' },
        }}
      />
    </Stack>
  );
};
