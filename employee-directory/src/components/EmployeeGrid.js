import Row from "./Row";
import Col from "./Col";

function EmployeeGrid(props) {
  return (
    <Row>
      <Col size="col-md-2">
        <img
          className="thumbnail"
          alt={props.firstName}
          src={props.thumbnail}
        ></img>
      </Col>
      <Col size="col-md-2">
        <p>
          {props.firstName} {props.lastName}
        </p>
      </Col>
      <Col size="col-md-2">
        <p>{props.phone}</p>
      </Col>
      <Col size="col-md-4">
        <p>{props.email}</p>
      </Col>
      <Col size="col-md-2">
        <p>{props.age}</p>
      </Col>
      <hr></hr>
    </Row>
  );
}

export default EmployeeGrid;
