import {
    getKindeServerSession
} from '@kinde-oss/kinde-auth-nextjs/server';
import {
    NextResponse
} from 'next/server';

export async function GET() {
    const {
        isAuthenticated
    } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();
    return NextResponse.json({
        isLoggedIn
    });
}
