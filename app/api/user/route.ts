import { NextRequest, NextResponse } from "next/server";


export function GET(req: NextRequest){
        return NextResponse.json({
            email:"sahithi@gmail.com",
            name: "sahithi"
        })
}

export async function POST(req: NextRequest){
    //body
    const body = await req.json()
    // //headers
    // console.log(req.headers.get("authorization"))
    // //params
    // console.log(req.nextUrl.searchParams.get("name"))
    //hit db with username password
 return NextResponse.json({
        message: "you are signed up"
})}