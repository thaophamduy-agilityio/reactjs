import { Image } from '@components/common/Image';
import arrow from '@image/arrow-right.svg';
import { memo } from 'react';

interface BreadCrumbProps {
  selectedCategory: string;
  total: number | undefined;
}

const BreadCrumb = memo(({ selectedCategory, total }: BreadCrumbProps): JSX.Element => {
  return (
    <div className="book-title">
      <span className="book-title-text">{selectedCategory || 'All Books'}</span>
      <span className="book-title-arrow">
        <Image altText="arrow" imageSrc={arrow} width={22} />
      </span>
      <span className="book-title-results">Showing {total} Result(s)</span>
    </div>
  );
});

export default BreadCrumb;
