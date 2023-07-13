import React from "react";
import "./header.css";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBook} />
            <span>Books</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBook} />
            <span>Books</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBook} />
            <span>Books</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBook} />
            <span>Books</span>
          </div>
        </div>
        <h1 className="headerTitle">
          Unlock the Power of Words - Discover Your Next Literary Adventure!
        </h1>
        <p className="headerDescription">
          Join Our Book-Loving Community and Unlock a World of Rewards!
          Subscribe Today for Exclusive Literary Benefits and Discover the Joy
          of Reading
        </p>
        <button className="headerButton">sign in / rigester </button>
        <div className="headerSearch">
          <div className="headerSerchItem">
            <FontAwesomeIcon icon={faBook} />
            <input
              className="headerSearchInput"
              type="text"
              placeholder="search by title, author,isbn"
            />
            <button className="searchButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
