import React from 'react';

export default class Counter extends React.Component {
    state = {
        number : 0,
        foo : {
            foovar : 'txt'
        },
        name : '',
        phone : ''
    }

    handelIncrease = () =>{
        this.setState({
            number : this.state.number+1,
            foo : {
                ...this.state.foo,
                foovar : 'plus'
            },
            
            name:'',
            phone:''
        })
    }

    handelDecrease = () =>{
        this.setState({
            number : this.state.number-1,
            foo : {
                ...this.state.foo,
                foovar : 'mious'
            }
        })
    }

    handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState ({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:''
        })
    }
    render(){

        return(
        <div>
                result : {this.state.number}<br/>                
                result : {this.state.foo.foovar}<br/>
                <button onClick={this.handelIncrease}>+</button>
                <button onClick={this.handelDecrease}>-</button>
                <input
                    placeholder="입력용"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                /><div>{this.state.name}</div>
                <input
                    placeholder="입력용2"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                /><div>{this.state.phone}</div><br/>
                <button onClick={this.handleSubmit}>submit</button>
        </div>
        );
    }
}