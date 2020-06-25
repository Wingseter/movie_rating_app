// TODO: 삭제후 DB연동
const users = [
    {email: "test1@test.com", password:"1111", name: "test1"},
    {email: "test2@test.com", password:"2222", name: "test2"},
    {email: "test3@test.com", password:"3333", name: "test3"}
]

function Signin({email, password}) {
    const user = users.find(
        (user) => user.email === email && user.password === password
    )
    if(user === undefined) throw new Error()
    return user
}

export default Signin;