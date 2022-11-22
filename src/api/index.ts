import axios from "axios"

const _api = axios.create({
    baseURL: "http://localhost:3000"
})

export type UserDoc = {
    email: string,
    documentName: string,
    status: Status,
    barId: string
}
export enum Status {
    Level1,
    Level2,
    Level3,
}

const details ={
    "email": "mayurd0303@gmail.com",
    "documentName": "income",
    "barId": "123789"
}
export function Main(){
    _api.get("/main")
    console.log();
    
}

function Admins(){
    _api.get("/admins")
}

function SendDoc(){
    _api.get("/sendDoc")
}