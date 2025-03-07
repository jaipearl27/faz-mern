import { NextResponse } from "next/server";
import { adminUser } from "./lib/Admin/IsAdmin";
import {
    withAuth
} from "@kinde-oss/kinde-auth-nextjs/middleware";

export default async function middleware(req) {
    try {
     const data = await adminUser()
     if(data && data[0] && data[0].name == "ADMIN"){
        return withAuth(req)
     } else {
         return NextResponse.redirect(new URL("/", req.url)); // Fix invalid URL issue
     }
    } catch (error) {
        return NextResponse.redirect(new URL("/", req.url))
    }
}

export const config = {
    matcher: ["/admin"],
};
