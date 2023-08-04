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

  const onRefresh = async () => {
    setBooks((prev) => {
      return {
        ...prev,
        books: [],
        pageNumber: 1
      }
    })
  }

  return (
    <div className='flex flex-cols justify-center'>
      <InfiniteScroll
        refreshFunction={onRefresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={<h3 className='text-center'>refresh</h3>}
        releaseToRefreshContent={
          <h3 className='text-center'>&#8593; Release to refresh</h3>
        }
        dataLength={books.books.length}
        next={() => {
          getBooks()
          setBooks({ ...books, pageNumber: books.pageNumber + 1 })
        }}
        loader={
          <p className='flex items-center justify-center min-h-screen'>
            Loading...
          </p>
        }
        endMessage={<p>No more data to load.</p>}
        hasMore={books.hasMore}
      >
        <p className='text-center py-4 font-[700] text-[18px]'>Books</p>

        <BookList />
      </InfiniteScroll>
    </div>
  )
}

export default BookListPage
