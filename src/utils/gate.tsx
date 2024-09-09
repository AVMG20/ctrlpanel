import {useSession} from "next-auth/react";
import React from "react";

export default function Gate({children, roles}: { children: React.ReactNode, roles: string[] | string }) {
    const {data: session} = useSession();

    if (!session) return null;

    if (typeof roles === 'string') {
        roles = [roles];
    }

    if (roles.includes(session.user.role)) {
        return <>{children}</>;
    }

    return null;
}

//example
// <Gate roles={['admin']}>
//     <div>Admin content</div>
// </Gate>
