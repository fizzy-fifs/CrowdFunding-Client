import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  

  const filteredSubjects = details.filter((subject) => { 
    return (
      subject.title.toLowerCase().includes(searchField.toLowerCase()) ||
      subject.category.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    return (
      <Scroll className="w-fit px-3 cursor-pointer border-b-0 border-[#fff0] transition-all hover:border-b-2 hover:border-green-500 h-full flex flex-col justify-center">
        <SearchList filteredSubjects={filteredSubjects} />
      </Scroll>
    );
  };

  const searchList = () => {
    
  };
  return (
    <section className="garamond">
      <div className="w-fit px-1 cursor-pointer border-b-0 border-[#fff0] transition-all hover:border-b-2 h-full flex flex-col justify-center">
        <input
          className="b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search Projects"
          onChange={handleChange}
        />
      </div>
    </section>
  );
}

export default Search;
