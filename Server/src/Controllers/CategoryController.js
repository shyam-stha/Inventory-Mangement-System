import { Category } from "../Model/Categories.js";

export const createCategory = async (body) => {
  try {
    const category = await Category.create(body);
    await category.save();
    return category;

  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const getCategory = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const updateCategory = async (id, body) => {
  try {
    const result = await Category.replaceOne({ _id:id }, body);
    return result;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const deleteCategory = async (id) => {
  try {
    const result = await Category.deleteOne({ _id:id });
    return result;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const getCategoryByID = async (id)=>{
  try {
      const category = await Category.findOne({_id:id});
      return category;
  } catch (error) {
    console.log(`Error: ${error}`);
    
  }
}
