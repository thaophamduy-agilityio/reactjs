import { BOOKS_MESSAGES } from '@constants/error-messages';
import { IBook } from '@interface/book';
import BookItem from '../Book';

interface ListBookProps {
  listBook: IBook[] | undefined;
  displayOption: boolean;
  onToggleModal: (book: IBook) => void;
}

const ListBook = ({ listBook, displayOption, onToggleModal }: ListBookProps) => {
  const renderListBook = () => {
    return listBook?.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        displayOption={displayOption}
        toggleModal={onToggleModal}
      />
    ));
  };

  return (
    <div className="book-list-wrapper">
      <ul className="book-list">
        {!listBook?.length ? (
          <li className="book-item not-found">{BOOKS_MESSAGES.NO_DATA}</li>
        ) : (
          renderListBook()
        )}
      </ul>
    </div>
  );
};

export default ListBook;
