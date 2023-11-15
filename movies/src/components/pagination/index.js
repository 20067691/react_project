import React from 'react';
import { Pagination } from '@mui/material';

const Pagination2 = ({ currentPage, totalPages, onPageChange, onNextPage }) => {
  const handleChange = (event, page) => {
    if (page === currentPage + 1) {
      onNextPage();
    } else {
      onPageChange(page);
    }
  };

  return (
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={10}
        page={currentPage}
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
};

export default Pagination2;
