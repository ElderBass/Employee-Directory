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
    sortedAge: false,
    sortedName: false,
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
  //i think both of these functions need work. not sure how to sort by name
  handleInputChange = (event) => {
    //this function needs to be linked to filter-by-name somehow
    const name = event.target.name;
    const value = event.target.value;
    //not sure I even need to set the state
    //maybe use index of = ?
    this.setState({
      [name]: value,
    });
  };

  sortByName = () => {
    this.state.sortedName
      ? this.setState({
          employees: this.state.employees.sort((a, b) =>
            b.name.first.localeCompare(a.name.first)
          ),
          sortedName: false,
        })
      : this.setState({
          employees: this.state.employees.sort((a, b) =>
            a.name.first.localeCompare(b.name.first)
          ),
          sortedName: true,
        });
  };

  sortByAge = () => {
    this.statesortedAge
      ? this.setState({
          employees: this.state.employees.sort(function (a, b) {
            return b.dob.age - a.dob.age;
          }),
          sortedAge: false,
        })
      : this.setState({
          employees: this.state.employees.sort(function (a, b) {
            return a.dob.age - b.dob.age;
          }),
          sortedAge: true,
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
                filterByName={this.filterByName}
              />
            </Col>
          </Row>
          <FirstRow sortName={this.sortByName} sortAge={this.sortByAge} />

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
