import { useEffect } from 'react'
import BookList from '../molecules/BookList'
import { useBooksQuery } from '../hooks/hooks'
import InfiniteScroll from 'react-infinite-scroll-component'
import { bookState } from '../atoms/bookAtoms'
import { useRecoilState } from 'recoil'

const BookListPage = () => {
  const { getBooks } = useBooksQuery()
  const [books, setBooks] = useRecoilState(bookState)

  useEffect(() => {
    getBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-cols justify-center'>
      <InfiniteScroll
        dataLength={books.books.length}
        next={() => {
          getBooks()
          setBooks({ ...books, pageNumber: books.pageNumber + 1 })
        }}
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
        hasMore={books.hasMore}
      >
        <BookList />
      </InfiniteScroll>
    </div>
  )
}

export default BookListPage
