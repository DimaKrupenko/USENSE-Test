const Input = ({ password, setPassword }) => {
    return (
        <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
        />
    )
}

export default Input