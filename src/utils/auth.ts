
import { jwtDecode } from "jwt-decode";
interface JwtPayload {
    exp: number;
    iat: number;
    iss: string;
    sub: string;
    username: string;
    roles: string[];
}

export function getToken() {
    return localStorage.getItem("adminToken");
}


export function getUser(){
    const token = getToken();


    if (!token) return null;

    try {
        const decoded = jwtDecode<JwtPayload>(token);


        if (decoded.exp * 1000 < Date.now()) {
            localStorage.removeItem("adminToken");
            return null;
        }
        return decoded;

    } catch {
        return null;
    }
}


export function isAdmin(){
    const user = getUser();
    console.log("user is ",user);
    return user?.roles?.includes("ADMIN");


}