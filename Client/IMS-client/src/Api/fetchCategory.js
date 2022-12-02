import axios from "../axiosInstance";

export const getCategory = async () => {
  const response = await axios.get("/category");
  return response.data;
};

export const postCategory = async (data) => {
  const response = await axios.post("/category", data);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await axios.delete(`/category/${id}`);
  return response.data;
};

export const changeCategoryStatus = async (
  id,
  categoryName,
  categoryStatus
) => {
  const category = categoryName;
  const status = categoryStatus === "Active" ? "Inactive" : "Active";
  const response = await axios.patch(`/category/${id}`, { category, status });
  console.log(response.data);
};
