import React from 'react';
import { useDispatch } from 'react-redux';


export default function SendEmailBtn() {

    let randNum = 0
    const makeRand = () => {
        let madeRand = Math.floor(100000 + Math.random() * 900000)
        randNum = madeRand
    }
    makeRand()
    const dispatch = useDispatch()
    const sendEmail = () => {
        console.log("attempting to send email");
        dispatch({ type: 'SEND', payload: randNum })
    }

    return (
        <button onClick={sendEmail}>Reset Password</button>
    )
}