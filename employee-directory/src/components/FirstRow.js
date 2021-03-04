import Row from "./Row";
import Col from "./Col";

function FirstRow(props) {
    return (
        <Row>
        <Col size="col-md-2">
          <p>
            <strong>Image</strong>
          </p>
        </Col>
        <Col size="col-md-2">
          <p onClick={props.sortName} id="nameRow">
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
          <p>
            <strong>Age</strong>
          </p>
        </Col>
        <hr></hr>
      </Row>
    )
}

export default FirstRow;