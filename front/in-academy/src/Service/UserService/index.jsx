import axios from "axios";
import { url } from "../../Static/variables";
import { parseCookies } from "nookies";

export function Login(email, password){
    return axios.post(url.login, { email: email, password: password })
}

export function Registry(name, email, password){
    return axios.post(url.registry, { name: name, email: email, password: password })
}

export function userIsAuthenticated(){
    var cookies = parseCookies();

    if(!cookies.session_user) return false;

    return axios.get(url.authentication, { headers: { Authorization: cookies.session_user }}).then( res => { return res.status === 200 ? true : false }).catch( err => { return false })
}

export function getUser(){

    const cookies = parseCookies();

    if(!cookies.email) return null;

    return axios.get(url.userInfo + cookies.email, { headers: { Authorization: cookies.session_user } } )
}