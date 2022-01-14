import React, { Component } from 'react';

class PhoneForm extends Component {

    input = React.creatRef

    state = {
        name : '',
        phone : '',
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        })
        this.input.current.focus();
    }

    render() {

        const style = {
            border : '1px solid red',
            padding : '8px',
            margin : '8px',
        }

        return (
            <form onSubmit={this.handleSubmit} style={style}>
                <div>
                    <input
                        name="name"
                        placeholder="이름"
                        onChange={this.handleChange}
                        value={this.state.name}
                        ref={this.input}
                    />
                </div>
                <div>
                    <input
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}
                        value={this.state.phone}
                    />
                </div>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;