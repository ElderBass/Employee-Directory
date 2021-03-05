import React from "react";

function SearchForm(props) {
  const style = {
    happy: {
      color: "red",
    },
    tips: {
      textAlign: "center",
      color: "rgb(2, 117, 216)",
    },
  };
  return (
    <>
      <div className="container" style={style.tips}>
        <h4>*Tips:</h4>

        <h6>
          - Click "Name" To Toggle Sorting Employees Alphabetically in Ascending
          and Descending Order
        </h6>
        <h6>
          - Click "Age" To Toggle Sorting Employees by Age in Ascending and
          Descending Order
        </h6>
        <h6>
          - Type an Employee's First Name in the Search Bar to Dynamcially
          Filter Your Employees.
        </h6>
        <h6>
          - Click "Reset Table" to Clear Your Last Search and Repopulate the
          Table With Your List of Employees.
        </h6>
        <br></br>
        <h5 style={style.happy}>Happy Managing!</h5>
      </div>
      <br></br>
      <br></br>
      <form className="input-group mb-3 searchForm">
        <input
          type="text"
          name="search"
          className="form-control"
          aria-describedby="resetBtn"
          placeholder="Enter Employee's First Name"
          onChange={props.handleFilterEmployee}
          value={props.value}
        ></input>
        <button
          type="submit"
          className="btn btn-primary"
          id="resetBtn"
          onClick={props.revertState}
        >
          Reset Table
        </button>
      </form>
    </>
  );
}

export default SearchForm;
