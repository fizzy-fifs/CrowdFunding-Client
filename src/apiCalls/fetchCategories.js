import axios from "axios";

const fetchCategories = async () => {
  const data = await axios
    .get("http://localhost:8080/api/v1.0/projects/getcategories")
    .then((res) => res.data);

  return data;
};

export default fetchCategories;
