import axios from 'axios'
import { useRecoilState } from 'recoil'

import { Book, bookState } from '../atoms/bookAtoms'

export const useBooksQuery = () => {
  const [books, setBooks] = useRecoilState(bookState)

  const getBooks = async () => {
    try {
      setBooks((prev) => {
        return {
          ...prev,
          loading: true,
          error: ``
        }
      })
      setBooks({ ...books, error: '', loading: true })

      const response = await axios.get(
        `http://localhost:8000/api/v1/books?page=${books.pageNumber}`
      )

      let data: Book[] = []

      if (response.data.length > 0) {
        data = (await response.data) as Book[]

        setBooks((prev) => {
          return {
            ...prev,
            books: [...prev.books, ...data]
          }
        })
        console.log(books.books)
      } else {
        setBooks((prev) => {
          return {
            ...prev,
            hasMore: false
          }
        })
      }
    } catch (error) {
      setBooks((prev) => {
        return {
          ...prev,
          error: `${error}`
        }
      })
    } finally {
      setBooks((prev) => {
        return {
          ...prev,
          loading: false
        }
      })
    }
  }

  return { books, getBooks }
}
