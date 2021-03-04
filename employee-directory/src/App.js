import React, { Component } from "react";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import FirstRow from "./components/FirstRow";
import EmployeeGrid from "./components/EmployeeGrid";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    employees: [],
    search: "",
  };
  //convert this to query format from activities maybe
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.search()
      .then((res) => {
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getEmployees(this.state.search);
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { employees, search } = this.state;

    return (
      <>
        <Header />

        <Container>
          <Row>
            <Col size="col-md-12">
              <SearchForm
                value={search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </Row>
          <FirstRow />

          {employees.map((emp) => (
            <EmployeeGrid
              thumbnail={emp.picture.thumbnail}
              firstName={emp.name.first}
              lastName={emp.name.last}
              phone={emp.phone}
              email={emp.email}
              age={emp.dob.age}
            />
          ))}
        </Container>
      </>
    );
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
