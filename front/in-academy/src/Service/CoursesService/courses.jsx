import axios from "axios";
import { url } from "../../Static/variables";
import { parseCookies } from "nookies";

export function getCourses(){
    const cookies = parseCookies();

    return axios.get(url.getCourses, { headers: { Authorization: cookies.session_user } } )
}

export function getSugestions(value){
    const cookies = parseCookies();

    return axios.get(url.getSugestions + value, { headers: { Authorization: cookies.session_user } } )
}

export function getCourseById(id){
    const cookies = parseCookies();

    return axios.get(url.getCourseById + id, { headers: { Authorization: cookies.session_user } } )
}

export function addToFavorite(email, id){
    const cookies = parseCookies();

    return axios.get(url.addToFavorite + email + '/' + id , { headers : { Authorization: cookies.session_user } } )
}

export function removeToFavorite(email, id){
    const cookies = parseCookies();

    return axios.get(url.removeToFavorite + email + '/' + id , { headers : { Authorization: cookies.session_user } } )
}

export function getTotalUsersInACourse(id){
    const cookies = parseCookies();

    return axios.get(url.getTotalUsersInACourse + id + '/TotalUsers', { headers: { Authorization: cookies.session_user } } )
}


export function registerUserToCourse(email, id){
    const cookies = parseCookies();

    return axios.put(url.registerUserToCourse, {email: email, course: id}, { headers: { Authorization: cookies.session_user } } )
}

