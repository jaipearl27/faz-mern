import {
    getKindeServerSession
} from '@kinde-oss/kinde-auth-nextjs/server';
import {
    NextResponse
} from 'next/server';

export async function GET() {
    const {
        isAuthenticated,
        getRoles
    } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();
    const roles = await getRoles()
    return NextResponse.json({
        isLoggedIn
    });
}
