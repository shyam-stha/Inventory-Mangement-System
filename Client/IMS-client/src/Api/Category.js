import axios from "../axiosInstance";

export const getCategory = async () => {
  const response = await axios.get("/category");
  return response.data;
};

export const postCategory = async(data)=>{
    const response = await axios.post("/category",data)
    return response.data
}