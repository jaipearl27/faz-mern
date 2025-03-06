"use server"
import {
    getKindeServerSession
} from "@kinde-oss/kinde-auth-nextjs/server"
export const adminUser = async()=>{
    try {
        const { getRoles } = getKindeServerSession()
        const data = await getRoles()
        console.log("the data is", data)
        return data;
    } catch (error) {
        return error
    }
}