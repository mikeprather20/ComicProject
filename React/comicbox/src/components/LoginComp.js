//#rcc
import React, { Component } from 'react'

export default class Login extends Component {
    sendLoginInfo = async (e) => {
        e.preventDefault();

        const url = 'http://127.0.0.1:5000/api/login'

        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const options = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)

        if (data.status === 'ok') {
            this.props.logMeIn(data.data)
        }

    };

    sendBasicAuth = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:5000/token', {
            method: "POST",
            headers: {Authorization: `Bearer ${btoa(e.target.username.value+":"+e.target.password.value)}`}
        });
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok') {
            this.props.logMeIn(data.data)
        }
    };

    render() {
        return (
        <div></div>
        )
    }
}