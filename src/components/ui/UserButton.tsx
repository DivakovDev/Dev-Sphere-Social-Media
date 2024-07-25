'use client';

import { useSession } from "@/app/(main)/SessionProvider";

interface UserButtonProps{
    className?: string
}

const UserButtom = ({className}:UserButtonProps) => {

    const { user } = useSession()

return (
<div>
UserButtom
</div>
);
}
export default UserButtom;