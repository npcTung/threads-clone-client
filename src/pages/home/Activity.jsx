import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  InfiniteScrollContainer,
  LoadingScreen,
  NotFound,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  UserAvatar,
  UserTooltip,
} from "@/components";
import icons from "@/lib/icons";
import path from "@/lib/path";
import { formatRelativeDate } from "@/lib/utils";
import { formatDate } from "date-fns";
import { vi } from "date-fns/locale";
import { fetchActivities } from "./actions";
import { useInfiniteQuery } from "@tanstack/react-query";

const { User2, MessageSquare, Heart, Dot, LoaderCircle } = icons;

const Activity = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["activities"],
    queryFn: ({ pageParam }) => fetchActivities(pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.nextCursor,
    staleTime: 5000,
  });

  const activities = data?.pages.flatMap((page) => page.activities) || [];

  if (status === "pending") return <LoadingScreen />;

  if (status === "success" && !activities.length && !hasNextPage)
    return (
      <div className="p-5 flex items-center justify-center">
        <span className="text-center text-destructive">
          Không có thông báo nào.
        </span>
      </div>
    );

  if (status === "error") return <NotFound />;

  return (
    <div className="max-w-[720px] mx-auto mb-10 p-5 border space-y-5 lg:rounded-2xl bg-card">
      <InfiniteScrollContainer
        onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
      >
        {activities.map((data) => (
          <ActivityPrewiew key={data._id} data={data} />
        ))}
        {isFetchingNextPage && (
          <LoaderCircle className="mx-auto size-5 animate-spin" />
        )}
      </InfiniteScrollContainer>
    </div>
  );
};

export default Activity;

const ActivityPrewiew = ({ data }) => {
  const notificationTypeMap = {
    Follow: {
      message: `${data.isSuerId.displayName} đã theo dõi bạn.`,
      icon: <User2 className="size-9 p-1 rounded-full bg-muted text-primary" />,
      herf: `/${data.isSuerId.userName}`,
    },
    Like: {
      message: `${data.isSuerId.displayName} thích bài viết của bạn.`,
      icon: (
        <Heart className="size-9 p-1 rounded-full bg-muted text-red-500 fill-red-500" />
      ),
      herf: `/${path.POSTS}/${data?.postId?._id}`,
    },
    Comment: {
      message: `${data.isSuerId.displayName} đã bình luận về bài đăng của bạn.`,
      icon: (
        <MessageSquare className="size-9 p-1 rounded-full bg-muted text-primary" />
      ),
      herf: `/${path.POSTS}/${data?.postId?._id}`,
    },
    Like_Comment: {
      message: `${data.isSuerId.displayName} thích bình luận của bạn trong bài viết mà bạn đã bình luận.`,
      icon: (
        <Heart className="size-9 p-1 rounded-full bg-muted text-red-500 fill-red-500" />
      ),
      herf: `/${path.POSTS}/${data?.postId?._id}`,
    },
  };

  const { message, icon, herf } = notificationTypeMap[data.type];

  return (
    <article className={"flex gap-3 rounded-2xl bg-card p-5"}>
      <div className="flex space-x-5 w-full">
        <UserAvatar avatarUrl={data.isSuerId.avatarUrl} size={36} />
        <div className="flex flex-col border-b w-full">
          <div className="flex justify-between">
            <div className="flex gap-1">
              <UserTooltip user={data.isSuerId}>
                <Link
                  to={`/${data.isSuerId.userName}`}
                  className="font-medium hover:underline"
                >{`${data.isSuerId.displayName}:`}</Link>
              </UserTooltip>
              <Link to={herf} className="block text-xs opacity-50 pt-1">
                {message}
              </Link>
            </div>
            {icon}
          </div>
          {data.postId && (
            <div className="flex items-center w-full">
              <Link to={herf} className="flex items-center flex-1">
                <span className="line-clamp-3 text-xs whitespace-pre-line text-muted-foreground">
                  {data.postId.context}
                </span>
                {data.commentId && (
                  <>
                    <Dot className="size-5 opacity-50" />
                    <small className="opacity-50">
                      {data.commentId.context}
                    </small>
                  </>
                )}
              </Link>
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <small className="opacity-50 cursor-default">
                      {formatRelativeDate(data.createdAt)}
                    </small>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="start">
                    {formatDate(data.createdAt, "EEEE, d MMMM, yyyy, HH:mm", {
                      locale: vi,
                    })}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
