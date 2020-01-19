import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component
{
  constructor(){
    // call super class Component constructor.
    super();

    // initialize state of this component.
    this.state = {
      monsters: [],
      searchField: ''
    };

    // binding this context to custom method.
    // this.handleChange = this.handleChange.bind(this); --> we dont this due to arrow function use.
  }

  // comes from Component class
  // react lifecycle method which invokes when react component mounts onto dom.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    // convert response to json
    .then(response => response.json()) // these are called promises in react world.
    // take json response and map to existing monsters state.
    .then(jsonResp => this.setState({monsters : jsonResp}))
  }

  // custom class method.
  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }
  // comes from Component class. This is invoked every time the state is modified.
  render(){
     const { monsters, searchField } = this.state;
     const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
     );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters' 
          handleChange={this.handleChange}
          />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
 