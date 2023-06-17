import React from "react";

function SearchResult({ item }) {
  return (
    <div key={item.id} className="searchResultItem">
      <h3>{item.volumeInfo.title}</h3>
      <p>{item.volumeInfo.authors && item.volumeInfo.authors.join(", ")}</p>
      <p>{item.volumeInfo.publishedDate}</p>
      <p>{item.volumeInfo.description}</p>
    </div>
  );
}

export default SearchResult;
