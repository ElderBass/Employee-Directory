import React from "react";

function SearchForm(props) {
return (
    <form className="searchForm">
        <input type="text" name="search" placeholder="Enter Employee Name" onChange={props.handleInputChange} value={props.value}></input>
        <button type ="submit" className="btn btn-primary" onClick={props.handleFormSubmit}>Search Employees</button>
    </form>
)
}

export default SearchForm;