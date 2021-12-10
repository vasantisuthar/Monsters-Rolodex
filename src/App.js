import {React, Component} from 'react';
import './App.css';
import CardList from './Components/Card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchString :""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState({monsters:users}))
  }

  handleChange = (e) => {
    this.setState({searchString:e.target.value})
    
  }

  render(){
    const {monsters, searchString} = this.state;
    const filteredMonster = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchString)
    );

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monster" handleChange = {this.handleChange}/>
        <CardList monsters = {filteredMonster}/>
      </div>
    );
  }
}

export default App;
