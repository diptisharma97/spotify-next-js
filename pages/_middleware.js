import {getToken} from 'next-aut/jwt';
import {NextResponse} from 'next/server';

export async function middleware(req){
    const token= await getToken({req,secret:process.env.JWT_SECRET});
    const {pathname}=re.nextUrl;
    if(pathname.include("/api/auth")||token){
        return NextResponse.next();
    
    }
    if(!token && pathname!=="/login"){
        return NextResponse.redirect("/login");
    }
}