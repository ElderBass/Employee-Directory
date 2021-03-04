import React from "react";

function SearchForm(props) {
return (
    <form className="searchForm">
        <input type="text" name="search" placeholder="Enter Employee First Name" onChange={props.handleFilterEmployee} value={props.value}></input>
        <button type ="submit" className="btn btn-primary" onClick={props.filterByName}>Search Employees</button>
    </form>
)
}

export default SearchForm;