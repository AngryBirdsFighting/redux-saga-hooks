import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { increment, incrementAsync } from './actions/counter.js';
import { getUserInfo, getTodoInfo } from './actions/user';
import { Button } from 'antd';

class App extends Component {
    render() {
        let {isLoading, error, data} = this.props.users;
        if(error){
            data = error
        }else if(isLoading){
            data = 'Loading..................................'
        }else{
            console.log(data)
        }
        return (
            <div className="App">
                <p className="App-intro">
                    {this.props.counter}
                </p>
                <Button onClick={this.props.increment}>+同步</Button>
                <br/>
                <Button onClick={this.props.incrementAsync}
                    type="dashed"
                >+异步</Button>
                <br/>
                <Button ghost
                    onClick={this.props.getUserInfo}
                    type="danger"
                >+getUser</Button>
                <br/>
                <Button onClick={this.props.getTodoInfo}
                    type="link"
                >+getTodo</Button>
                <p>
                    {data}
                </p>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        users: state.users
    };
};

export default connect(mapStateToProps, { increment, incrementAsync, getUserInfo, getTodoInfo })(App);
