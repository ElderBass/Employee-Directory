import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    employees: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json").then(res => res.json())
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
  };

  //getEmployees();

  render() {
    const { error, isLoaded, employees } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <h1>Hello there!</h1>
          <ul>
            {employees.map((emp) => (
              <li key={emp.id}>
                {emp.name.first} {emp.name.last}
              </li>
            ))}
          </ul>
        </div>
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
