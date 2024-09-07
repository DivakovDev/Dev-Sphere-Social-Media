import UserAvatar from "@/components/UserAvatar";
import { NotificationData } from "@/lib/types";
import { cn, formatRelativeDate } from "@/lib/utils";
import { NotificationType } from "@prisma/client";
import { Heart, MessageCircle, User2 } from "lucide-react";
import Link from "next/link";

interface NotificationProps {
  notification: NotificationData;
}

export default function Notification({ notification }: NotificationProps) {
  const notificationTypeMap: Record<
    NotificationType,
    { message: string; icon: any; href: string }
  > = {
    FOLLOW: {
      message: `${notification.issuer.displayName} followed you!`,
      icon: <User2 className="size-7 text-primary" />,
      href: `/users/${notification.issuer.username}`,
    },
    COMMENT: {
      message: `${notification.issuer.displayName} commented on your post!`,
      icon: <MessageCircle className="size-7 text-primary fill-primary" />,
      href: `/posts/${notification.postId}`,
    },
    LIKE: {
      message: `${notification.issuer.displayName} liked your post!`,
      icon: <Heart className="size-7 text-red-500 fill-red-500" />,
      href: `/users/${notification.issuer.username}`,
    },
  };

  const { message, icon, href } = notificationTypeMap[notification.type];

  return (
    <Link href={href} className="block">
      <article
        className={cn(
          "flex gap-3 rounded-2xl bg-card p-5 shadow-sm transition-colors hover:bg-card/70",
          !notification.read && "bg-primary/10",
        )}
      >
        <div className="my-1">{icon}</div>
        <div className="space-y-3">
          <div className='flex flex-row items-center justify-start gap-2 mb-3'>
          <UserAvatar avatarUrl={notification.issuer.avatarUrl} size={36} />
            <div className=''>
            <span className="font-semibold">{notification.issuer.displayName}</span>
            <p
              className="block text-sm text-muted-foreground hover:underline"
              suppressHydrationWarning
            >
              {formatRelativeDate(notification.createdAt)}
            </p>
            </div>
          </div>
            <span>{message}</span>
          {notification.post && (
            <div className="line-clamp-3 whitespace-pre-line text-muted-foreground">
              {notification.post.content}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
