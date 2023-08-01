import { NextResponse } from "next/server";

export default function middleware(request) {
    const token = request.cookies.get('token'); //na requisição ele vai pegar o cookie chamado token
    const urlLogin = new URL('/pages/login', request.url); //endereço, 

    if (!token) { //senão existe o token
        if (request.nextUrl.pathname === '/pages/private') { 
            return NextResponse.redirect(urlLogin);
          }
    }
    NextResponse.next();
};

export const config = {
    matcher: ["/", "/pages/private"] //no matcher a gente passa as rotas que queremos trabalhar
};