import instance from "./instance"



export const signup = (data:any) => {
    const uri = "/signup"
    return instance.post(uri, data)
}


export const signin = (data:any) => {
    const uri = "/signin"
    return instance.post(uri, data)
}