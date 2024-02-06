import React, { useState } from "react";
import Product from "./Product";


function SearchableList(item) {
  // const [{ item, user }, dispatch] = useStateValue();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = item.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInput}
      />
      <Product>
        {filteredItems.map((item) => (
          <l key={item.id}>{item.title}</l>
        ))}
      </Product>
    </div>
  );
};

export default SearchableList;
