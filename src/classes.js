import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Hello, React function</h1>
                <h2>Count is {count}</h2>
                <button onClick={() => { this.setState({count: this.state.count+1})}}>Click Me!</button>
                </div>
        )
    }
}

export default App;

// // Classes allow you to organize your data and give them behavior

// const UserObject = {
//     firstName: 'Miachael',
//     lastName: 'Law',
//     signup: function () {
//         console.log(this.firstName, 'signed up!')
//     }
// }

// console.log(UserObject)

// // Classes are data structures that allow us to create blueprints for objects

// // DO NOT HAVE LOWER CASE CLASS NAMES

// class User {
//     // constructor tells JS what any given instance of User consits of
//     // constructor function is called automatically any time you say "new" in JS
//     constructor(name, email, password) {
//         this.name = name
//         this.email = email
//         this.password = password
//     }
//     signup() {
//         console.log(this.name, 'signed up!')
//     }
// }


// // this = an instance of User
// // a user is a data structure that has the attributes(properties) defined in our class construction
// let user = new User('Michael', 'michael@gmail.com', '11111112')

// user.signup()

// //check it out. Using the extends keyword and the super keyword to demonstrate the power of inheritance
// class AdminUser extends User{
//     constructor(name, email, password) {
//         // super references the constructor function being inherited
//         super(name, email, password)
//         this.admin = true
//     }
// }