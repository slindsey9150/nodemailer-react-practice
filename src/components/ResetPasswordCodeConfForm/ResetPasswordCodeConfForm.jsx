import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function ResetPasswordCodeConfForm () {
    const history = useHistory()

    const submitCode = () => {
        history.push('/reset-password-page')
    }
    return(
        <div>
            <h1>Please enter your password reset code:</h1>
            <form>
               Code: <input></input>
               <button onClick={submitCode}>Submit</button>

            </form>
        </div>
    )
}