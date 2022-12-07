import React from "react";
import { useGlobalCntext } from "./Apicontext";

import '../styles/Filter.css'

export default function Filter() {

const { filterOnValue , sortByValue , timeBeforeValue , filterOn , filterBy , filterTime} = useGlobalCntext();

  return (
    <div className="filter--style">
      {` Filter : `}
      <select
        className="custom-select"
        value={filterOnValue}
        onChange={(e) => {
          filterOn(e.target.value);
        }}
      >
        <option value="(story,comment)">All</option>
        <option value="story">Stories</option>
        <option value="comment">Comment</option>
      </select>
      {` by `}
      <select
        className="custom-select"
        value={sortByValue}
        onChange={(e) => {
          filterBy(e.target.value);
        }}
      >
        <option value="search">Popularity</option>
        <option value="search_by_date">Date</option>
      </select>
      {` for `} 
      <select
        className="custom-select"
        value={timeBeforeValue}
        onChange={(e) => {
          console.log(e.target.value)
          filterTime(e.target.value)
        }}
      >
        <option value={`A`}>All time</option>
        <option value={`D`}>Past 24 hours</option>
        <option value={`W`}>Past Week</option>
        <option value={`M`}>Past month</option>
      </select>
    </div>
  );
}