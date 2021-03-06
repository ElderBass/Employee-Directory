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
    isFiltered: false,
    initialEmployees: [],
  };

  handleRevertState = (event) => {
    event.preventDefault();
    
   this.setState({employees: this.state.initialEmployees, search: ""});
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.search()
      .then((res) => {
        this.setState({ employees: res.data.results, initialEmployees: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleFilterEmployee = (event) => {
    event.preventDefault();
    
    //const name = event.target.name;
    const empName = event.target.value;
    const filteredEmp = this.state.employees.filter(emp => emp.name.first.toLowerCase().includes(empName.toLowerCase()));
    //this works dynamically and shit, but how to revert back to the OG emp list?
    this.setState({
        employees: filteredEmp,
        search: empName,
        isfiltered: true,
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
    this.state.sortedAge
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
                handleFilterEmployee={this.handleFilterEmployee}
                revertState={this.handleRevertState}
              />
            </Col>
          </Row>
          <br></br>
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
