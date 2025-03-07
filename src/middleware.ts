import { NextRequest, NextResponse } from 'next/server';

export const authRoutes = ['/auth/sign-in', '/auth/sign-up', '/auth/forgot-password', '/auth/reset-password'];
const publicRoutes = ['/', '/about', '/contact',`/book/[id]`];
export const privateRoutes = ['/user/profile', '/dashboard', '/payments', '/borrows'];

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('access_token')?.value;
    const { pathname } = req.nextUrl;

    const isSingedIn = !!token;

    if (authRoutes.includes(pathname)) {
        if (isSingedIn) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    }

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    if (privateRoutes.some(route => pathname.startsWith(route))) {
        if (!isSingedIn) {
            return NextResponse.redirect(new URL('/auth/sign-in', req.url));
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}