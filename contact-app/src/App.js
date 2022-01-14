import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;

  state = {
    
    information: [
      {
        id: 0,
        name: '손영재',
        phone: '010-2000-1222'
      },
      {
        id: 1,
        name: '김선우',
        phone: '010-2000-0412'
      },
      {
        id: 2,
        name: '김지우',
        phone: '010-1997-0327'
      }
    ],

    keyword: '',

  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++,
      })
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return {
              id,
              ...data, //name, phone
            }
          }
          return info;
        }
      )
    })
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder={'검색...'}
        />
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;