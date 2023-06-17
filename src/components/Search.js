import React, { useState, useEffect } from "react";
import "../css/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Card from "./Card";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [bookCount, setBookCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setBookData([]);
    setPage(1);
    setHasMore(true);
    setBookCount(0);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      searchBook();
    }
  }, [page, filter, sort]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value.trim() !== "") {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=3`)
        .then((res) => {
          const newSuggestions = res.data.items || [];
          setSuggestions(newSuggestions);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBook();
    setSuggestions([]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const searchBook = () => {
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyDRH9-wSS-1qHMJP-0Qnxuk0KtC6nBMrsE&maxResults=40&page=${page}&orderBy=${sort}`
      )
      .then((res) => {
        const newBooks = res.data.items || [];
        const formattedBooks = newBooks.map((book) => {
          const availability =
            book.saleInfo && book.saleInfo.saleability === "FOR_SALE";
          const numAvailable =
            book.saleInfo && book.saleInfo.hasOwnProperty("retailPrice")
              ? book.saleInfo.retailPrice.amount
              : 0;
          return {
            ...book,
            volumeInfo: {
              ...book.volumeInfo,
              availability,
              numAvailable,
            },
          };
        });
        setBookData((prevData) => [...prevData, ...formattedBooks]);
        setHasMore(newBooks.length > 0);
        setBookCount(res.data.totalItems);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section className="searchSection">
      <h2 className="searchHeading">Find Your Book</h2>
      <form className="searchBar" onSubmit={handleSubmit}>
        <div className="searchInputWrapper">
          <input
            type="text"
            className="searchInput"
            placeholder="Search for Books, Novels, and Journals"
            value={searchQuery}
            onChange={handleInputChange}
          />
          {/* Display search suggestions */}
          {suggestions.length > 0 && (
            <ul className="suggestionsList">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="suggestionItem"
                  onClick={() => {
                    setSearchQuery(suggestion.volumeInfo.title);
                    setSuggestions([]);
                    searchBook();
                  }}
                >
                  {suggestion.volumeInfo.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className="searchButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className="filteringLayout">
          <select
            className="filterSelect"
            value={filter}
            onChange={handleFilterChange}
          >
            <option>Filter by</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="subject">Subject</option>
            <option value="publishDate">Publish Date</option>
          </select>
          <select
            className="filterSelect"
            value={sort}
            onChange={handleSortChange}
          >
            <option>Sort by</option>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </form>
      <div className="searchResults">
        {bookData.length === 0 && !loading && (
          <p className="noresult">
            No results found. Please Apply both filters after entering a search query.
          </p>
        )}
        {bookData.length > 0 && (
          <>
            <h1 className="bookstyle">Number of Books: {bookCount}</h1>
            <Card books={bookData} />
            {loading && (
              <div className="loadingSpinner">
                <FontAwesomeIcon icon={faSpinner} spin />
              </div>
            )}
            {!loading && hasMore && (
              <button className="loadMoreButton" onClick={handleLoadMore}>
                Load More
              </button>
            )}
            {!loading && !hasMore && <p>No more results</p>}
          </>
        )}
      </div>
    </section>
  );
}

export default Search;
