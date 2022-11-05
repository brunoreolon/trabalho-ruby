import axiosInstance from "../utils/axios"

const PublisherService = {
  getAll: async () => {
    let response = await axiosInstance.get('/publishers')
    return response.data
  }
}

export default PublisherService