import React from "react";

function Category() {
  let categories = JSON.parse(localStorage.getItem("categories")) || [];

  return (
    <div className="categories grid grid4:grid-cols-4 grid3:grid-cols-3 grid2:grid-cols-2 grid1:grid-cols-1 bg-[#EFF5F4] p-4">
      {categories.map((category) => (
        <div className="p-4">
          <div
            className="w-full rounded-md h-[50px] w-[200px] overflow-hidden bg-white shadow-md"
            id="eachCategoryCard"
          >
            <h4 className="cursor-pointer font-bold text-left line-clamp-2">
              {category}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
