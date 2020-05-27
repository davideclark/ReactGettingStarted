import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//   {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];

// {testData.map(profile => <Card {...profile}/>)}


const CardList = (props) => (
	<div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
  );

class Card extends React.Component {
  render()
  {
    const profile = this.props;
    return (
      <div className="github-profile" style={{ margin: '1rem'}}>
        <img src={profile.avatar_url} alt="profile avatar" />
        <div className="info" style={{display:'inline-block', marginLeft: 10}}>
          <div className="name" style={{fontSize:'125%'}} >{profile.name}</div>
    <div className="company">{profile.company}</div>
        </div> 
      </div>
    )
  }
}


class Form extends React.Component {
  state = {userName: ''}
  handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    //console.log('Form ',resp.data);
    this.props.onSubmit(resp.data);
    //console.log(this.state.userName
    this.setState({userName:''})

    //  this.userNameInput.current is the html element

    

  };
  render()
  {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Gihub user name" 
          required
          value={this.state.userName}
          onChange={event => this.setState({userName : event.target.value})}>
        </input>
        <button>Add card</button>
      </form>
    )
  }
}




class App extends React.Component {
  // constructor
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     profiles : testData,
  //   };
  // }
 // new syntax, instead of constructor
  state = { profiles : [],}

  addNewProfile = (profileData) => {
    console.log('App', profileData);
    this.setState(prevState=> ({
      // This cats the prevState.profiles with the new profileData and assigns it to the profiles property
      // this is the spread operator
      profiles: [...prevState.profiles, profileData]
    }))
  }

  // this
  render(){
  return (
  <div className="header">
    {this.props.title}
    <Form onSubmit={this.addNewProfile}  />
    <CardList profiles={this.state.profiles} />
    </div>)
  }
}


export default App;
