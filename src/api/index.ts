import { createClient } from "@supabase/supabase-js";
import axios from "axios"
const supabase = createClient(
    "https://mqmanoknpskkhsinemwa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbWFub2tucHNra2hzaW5lbXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4NjMyMDgsImV4cCI6MTk4MjQzOTIwOH0.hKyRlLYNCQk4ED3RNqX7ABgDT1KY5DLVv5l2F3tFyLU"
  );
const _api = axios.create({
    baseURL: "https://3000-md0011-dtsbackend-dhkbonypoyg.ws-us77.gitpod.io"
})

export type UserDoc = {
    email?: string,
    documentName?: string,
    status?: Status,
    barId: string
}
export enum Status {
    Level1,
    Level2,
    Level3,
}

// const details ={
//     "email": "mayurd0303@gmail.com",
//     "documentName": "income",
//     "barId": "123789"
// }

export const Main =async  (email, name, barcode) =>{
    const body : UserDoc = {
barId:barcode,
email:email,
documentName:name
    }
    
    const cSes = await supabase.auth.getSession()

    await _api.post("/main",body,{
        headers:{
            authorization:cSes.data.session?.access_token.replace("Bearer ","")
        }
    })
    console.log("DESK 1 DONE");
}

export const Admins = async (email, name, barcode) =>{
    const cSes = await supabase.auth.getSession()
    const body : UserDoc = {
        barId:barcode,
    }
    await _api.post("/admins",body,{
        headers:{
            authorization:cSes.data.session?.access_token.replace("Bearer ","")
        }
    })
    console.log(email + " " + name + " " + barcode);
}

// function SendDoc(){
//     _api.get("/sendDoc")
// }

// export {Main}