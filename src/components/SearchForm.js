import React from "react";

function SearchForm(props) {
return (
    <form className="input-group mb-3 searchForm">
        <input type="text" name="search" className="form-control" aria-describedby="resetBtn" placeholder="Enter Employee's First Name" onChange={props.handleFilterEmployee} value={props.value}></input>
        <button type ="submit" className="btn btn-primary" id="resetBtn" onClick={props.revertState}>Reset Table</button>
    </form>
)
}

export default SearchForm;