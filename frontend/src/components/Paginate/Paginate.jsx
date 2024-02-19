
import { Pagination } from 'flowbite-react';
import { useState } from 'react';

export default function Paginate() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={3} onPageChange={onPageChange} showIcons />
    </div>
  );
}
