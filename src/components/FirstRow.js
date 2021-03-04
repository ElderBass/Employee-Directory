import Row from "./Row";
import Col from "./Col";

function FirstRow(props) {
  const style = {
    tips: {
      textAlign: "center",
      color: "rgb(2, 117, 216)"
    },
  };

  return (
    <>
      <div className="container" style={style.tips}>
        <h4>*Tips:</h4>
        <h6>Click "Name" To Toggle Sorting Employees Alphabetically in Ascending and Descending Order</h6>
        <h6>Click "Age" To Toggle Sorting Employees by Age in Ascending and Descending Order</h6>
      </div>
      <br></br>
      <br></br>
      <Row>
        <Col size="col-md-2">
          <p>
            <strong>Image</strong>
          </p>
        </Col>
        <Col size="col-md-2">
          <p onClick={props.sortName} className="rowHead">
            <strong>Name</strong>
          </p>
        </Col>
        <Col size="col-md-2">
          <p>
            <strong>Phone</strong>
          </p>
        </Col>
        <Col size="col-md-4">
          <p>
            <strong>Email</strong>
          </p>
        </Col>
        <Col size="col-md-2">
          <p onClick={props.sortAge} className="rowHead">
            <strong>Age</strong>
          </p>
        </Col>
        <hr></hr>
      </Row>
    </>
  );
}

export default FirstRow;
