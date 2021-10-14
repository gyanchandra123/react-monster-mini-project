import React from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searchBox/search-box.component";
export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    /* this.handleInputChange = this.handleInputChange.bind(this) */
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleInputChange = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(e.target.value)
    );
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search the monster"
          handleChange={this.handleInputChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
