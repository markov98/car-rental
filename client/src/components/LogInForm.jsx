export default function LogInForm() {
    return (
        <form action="">
            <h2>Login</h2>
            <label htmlFor='username'>Username:</label>
            <input name='username'></input>
            <label htmlFor='password'>Password:</label>
            <input name='password'></input>
            <button type='submit'>Submit</button>
        </form>
    )
}