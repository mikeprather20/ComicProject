//#rcc
import React, { Component } from 'react'

export default class Signup extends Component {


    sendSignUpInfo = async (e) => {
        e.preventDefault();

        if (e.target.password.value !== e.target.confirmPassword.value){
            return
        }

        const res = await fetch('http://127.0.0.1:5000/signup', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            })
        });
        const data = await res.json();
        console.log(data)
    };

    render() {
        return (
            <div>
                {this.sendSignUpInfo}
            </div>
        )
    }
}
