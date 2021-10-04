import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

const GetUser = (user) => {
    console.log(user)
    return !!user ? user : { role: user.role};

}

/**
 * Checking role its valid
 * @param {object}
 * {
 *   role: string,
 *   allowedRoles: array,
 * }
 * @return {boolean} 
 */
const isValidRole = ({role, allowedRoles}) => allowedRoles.includes(role);

/**
 * Authorization (High Order Component Concept)
 * @param {array} allowedRoles
 * @param {object} WrappedComponent
 * @return {object} React.Component
 *
 * Example:
 *    # set AllowedRoles with Component
 *    const AuthComponent = Authorization(['user','admin','superman'])(MyComponent)
 *
 *    # set AllowedRoles without Component
 *    const AuthHOC = Authorization(['user','admin','superman'])
 *    const MyComponent = () => <h1> Hello </h1>
 *    const AuthComponent = AuthHOC(MyComponent);
 *
 *    ReactDOM.render( <AuthComponent/>, target);
 */
const Authorization = allowedRoles => wrappedComponent => class withAuth extends Component {
    constructor(props){
        super(props);
        console.log("aaaaaaaaaaa")
        console.log(props)
        // console.log(props.user)
        this.state = {
            user: GetUser(props.user),
        }
    }        
    
    render(){
        const {role} = this.state.user;
        return isValidRole({role: role, allowedRoles: allowedRoles}) ?
            <wrappedComponent/>:
            <Redirect to="/home" />
    }
}


/**
 * define administrator role
 * use: Admin(<Component/>)
 */
export const Admin = Authorization(['admin']);

/**
 * define user role
 * use: User(<Component/>)
 */
export const User = Authorization(['admin','user']);

export default {
    Admin,
    User,
}