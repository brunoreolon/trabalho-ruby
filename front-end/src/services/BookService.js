import axiosInstance from "../utils/axios"

const BookService = {
  getAll: async () => {
    let response = await axiosInstance.get('/books')
    return response.data
  },
  getById: async ({url, id}) => {
    if (!id) return

    let response = await axiosInstance.get(`/books/${id}`)
    return response.data
  },
  create: async (book) => {
    if (!book) return

    let response = await axiosInstance.post(`/books`, { book: book })
    return response.data
  },
  destroy: async (id) => {
    if (!id) return

    let response = await axiosInstance.delete(`/books/${id}`)
    return response.data
  },
  update: async(id, book) => {
    if (!id && !book) return

    let response = await axiosInstance.put(`/books/${id}`, { book: book })
    return response.data
  }

}

export default BookService