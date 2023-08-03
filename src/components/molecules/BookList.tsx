import { useRecoilValue } from 'recoil'

import { bookState } from '../atoms/bookAtoms'

const BookList = () => {
  const bookList = useRecoilValue(bookState)

  return (
    <div className='grid grid-cols-1 sm300:grid-cols-2 gap-1 '>
      {bookList.books.map((book) => (
        <div key={book.id}>
          <img
            height={187}
            width={187}
            alt={book.description}
            src={`http://localhost:8000${book.coverImage}`}
            className='object-cover'
          />
          <div className='px-2 py-3'>
            <p>{book.title}</p>
            <div className='flex justify-between '>
              <p className='text-[#FF003E] font-[700] text-[14px]'>
                {book.discountRate}%
              </p>
              <p className='font-[700] text-[16px]'>
                {book.price} <span className='font-[500] text-[14px]'>원</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookList
