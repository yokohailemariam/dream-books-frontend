import { atom } from 'recoil'

export interface Book {
  id: number
  title: string
  description: string
  discountRate: number
  coverImage: string
  price: number
}

export const bookState = atom({
  key: 'bookState',
  default: {
    books: [] as Book[],
    hasMore: true,
    pageNumber: 1,
    error: '',
    loading: false
  }
})
