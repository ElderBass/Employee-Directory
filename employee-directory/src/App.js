import React, { Component } from "react";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import "./App.css";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    employees: [],
    search: "",
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          this.setState({
            isLoaded: true,
            employees: data.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleFormSubmit = () => {

  }

  handleInputChange = () => {
    
  }
  render() {
    const { error, isLoaded, employees } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header />

          <Container>
            <Row>
              <Col size="col-md-12">
                <SearchForm
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </Col>
            </Row>
            <Row>
              <Col size="col-md-2">
                <p>
                  <strong>Image</strong>
                </p>
              </Col>
              <Col size="col-md-2">
                <p>
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
            {employees.map((emp) => (
              <Row>
                <Col size="col-md-2">
                  <img alt={emp.name.first} src={emp.picture.thumbnail}></img>
                </Col>
                <Col size="col-md-2">
                  <p>
                    {emp.name.first} {emp.name.last}
                  </p>
                </Col>
                <Col size="col-md-2">
                  <p>{emp.phone}</p>
                </Col>
                <Col size="col-md-4">
                  <p>{emp.email}</p>
                </Col>
                <Col size="col-md-2">
                  <p>{emp.dob.age}</p>
                </Col>
                <hr></hr>
              </Row>
            ))}
          </Container>
        </>
      );
    }
  }
}

export default App;

// componentDidMount() {
//   fetch("https://api.example.com/items")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           isLoaded: true,
//           items: result.items
//         });
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
// }

// render() {
//   const { error, isLoaded, items } = this.state;
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
// }
