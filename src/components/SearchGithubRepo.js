import React, { useState } from "react";
import axios from "axios";
import "../styles/SearchGithubRepo.css";

const SearchGithubRepo = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("stars");
  const [repos, setRepos] = useState([]);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(searchValue);
    axios
      .get("https://api.github.com/search/repositories", {
        params: {
          q: searchValue,
          sort: sort,
        },
      })
      .then((response) => {
        console.log(response.data.items);
        setRepos(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div id="container">
      <h1 id="title">Github Search Repo</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchValue}
          placeholder="Search for repositories..."
        />
        <div className="sort-container">
          <label htmlFor="sort-by"><b>Sort By:</b></label>
          <select id="sort-by" value={sort} onChange={handleSortChange}>
            <option value="stars">Stars</option>
            <option value="watchers_count">Watchers Count</option>
            <option value="score">Score</option>
            <option value="name">Name</option>
            <option value="created_at">Created At</option>
            <option value="updated_by">Updated By</option>
          </select>
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="card-container">
        {repos.map((repo) => {
          return (
            <div key={repo.id} className="card">
              <img src={repo.owner.avatar_url} alt="avatar"></img>
              <div className="card-text-container">
                <div className="card-text">
                  <span className="heading">Repo Name: </span>
                  {repo.name}
                </div>
                <div className="card-text">
                  <span className="heading">Description: </span>
                  {repo.description}
                </div>
                <div className="card-text">
                  <span className="heading">Language: </span>
                  {repo.language}
                </div>
                <div className="card-text">
                  <span className="heading">Stars: </span>
                  {repo.stargazers_count}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchGithubRepo;
