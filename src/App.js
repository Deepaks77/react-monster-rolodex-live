import React from "react";

import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => this.setState({ monsters: result }));
  }
  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter((f) =>
      f.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          value={this.state.searchValue}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
