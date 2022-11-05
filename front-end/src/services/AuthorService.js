import axiosInstance from "../utils/axios"

const AuthoService = {
  getAll: async () => {
    let response = await axiosInstance.get('/authors')
    return response.data
  }
}

export default AuthoService