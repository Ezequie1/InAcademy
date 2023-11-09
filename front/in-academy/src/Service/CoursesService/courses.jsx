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