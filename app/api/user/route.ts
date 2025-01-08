
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import client from "@/db"


export async function POST(req: NextRequest){
    //body
    const body = await req.json()


    try {
         
    await client.user.create({
        data:{
            email: body.email,
            password: body.password
        }
    }) 
    return NextResponse.json({
        body,
        
})
    } catch (e) {
       
       return NextResponse.json({
            message:"error while signing up"
        },{
            status: 411
        })
    }

   

    // //headers
    // console.log(req.headers.get("authorization"))
    // //params
    // console.log(req.nextUrl.searchParams.get("name"))
    //hit db with username password
}