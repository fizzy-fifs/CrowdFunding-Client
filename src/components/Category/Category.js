import React from "react";

function Category() {
  let categories = JSON.parse(localStorage.getItem("categories")) || [];

  const viewClickedCategory = (category) => {
    return window.location.href=`/categories/${category}`
  }

  return (
    <div className="categories grid grid4:grid-cols-4 grid3:grid-cols-3 grid2:grid-cols-2 grid1:grid-cols-1 align-middle bg-[#EFF5F4] p-4">
      {categories.map((category) => (
        <div className="p-4  ">
          <div
            className="w-full cursor-pointer rounded-md h-[100px] w-[300px] flex items-center justify-center overflow-hidden bg-green-500 shadow-md"
            id="eachCategoryCard"
            onClick={() => viewClickedCategory(category)}
          >
            <h4 className=" font-bold text-white line-clamp-2" >
              {category}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
