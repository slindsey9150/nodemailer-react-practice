import React from 'react';
import { useDispatch } from 'react-redux';


export default function SendEmailBtn() {
    const dispatch = useDispatch()
    const sendEmail = () => {
        console.log("attempting to send email");
        dispatch({type: 'SEND'})
    }

    return (
        <button onClick={sendEmail}>click me </button>
    )
}