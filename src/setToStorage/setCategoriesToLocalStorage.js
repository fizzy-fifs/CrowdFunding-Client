import fetchCategories from "../apiCalls/fetchCategories";

const setCategoriesToLocalStorage = async () => {
  const allCategories = await fetchCategories();
  localStorage.setItem("categories", JSON.stringify(allCategories));
};

export default setCategoriesToLocalStorage;
