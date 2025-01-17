import icons from "@/lib/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  InfiniteScrollContainer,
  LoadingButton,
  LoadingScreen,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  UserAvatar,
  UserTooltip,
} from "..";
import { vi } from "date-fns/locale";
import { formatDate } from "date-fns";
import { cn, formatRelativeDate, formmatNumber } from "@/lib/utils";
import useCurrentStore from "@/zustand/useCurrentStore";
import { getAllCommentsPost } from "./actions";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDeleteCommentMutation, useLikeCommentMutation } from "./mutations";

const { Dot, Heart, Trash2, LoaderCircle } = icons;

const Comments = ({ postId }) => {
  const queryKey = ["comments", postId];
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam }) => getAllCommentsPost(postId, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.nextCursor,
    staleTime: 5000,
  });

  const datas = data?.pages.find((comment) => comment);

  if (status === "pending") return <LoadingScreen />;

  if (status === "success" && !datas?.comments?.length && !hasNextPage)
    return (
      <div className="p-5 flex items-center justify-center">
        <span className="text-center">Không có bình luận nào.</span>
      </div>
    );

  if (status === "error")
    return (
      <div className="p-5 flex items-center justify-center">
        <span className="text-center text-destructive">
          Đã xảy ra lỗi khi tải bình luận.
        </span>
      </div>
    );

  return (
    <>
      <div className="w-full flex flex-col space-y-5">
        <div className="flex justify-between items-center p-5 border-b">
          <span>Thread trả lời</span>
        </div>
        <InfiniteScrollContainer
          onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
        >
          {datas?.comments.map((data) => (
            <Comment key={data._id} data={data} />
          ))}
          {isFetchingNextPage && (
            <LoaderCircle className="mx-auto size-5 animate-spin" />
          )}
        </InfiniteScrollContainer>
      </div>
    </>
  );
};

export default Comments;

const Comment = ({ data }) => {
  const [showDeteteComment, setShowDeteteComment] = useState(false);
  const { currentData } = useCurrentStore();
  const isLike = data.likes.includes(currentData._id);
  const mutation = useLikeCommentMutation(data.postId);

  return (
    <>
      {/* delete comment */}
      <DialogDeleteComment
        open={showDeteteComment}
        onOpenChange={() => setShowDeteteComment(false)}
        postId={data.postId}
        commentId={data._id}
      />
      <div className={"w-full flex items-center justify-between p-5 border-b"}>
        <div className="flex gap-3 w-full">
          <div className="flex flex-col items-center">
            <Link to={`/${data.userId.userName}`}>
              <UserAvatar avatarUrl={data.userId.avatarUrl} />
            </Link>
          </div>
          <div className="flex-1 w-full space-y-5">
            <div className="flex flex-col">
              <div className="flex justify-between w-full">
                <div className="flex w-full items-center">
                  <UserTooltip user={data.userId}>
                    <Link
                      to={`/${data.userId.userName}`}
                      className="text-sm font-medium hover:underline"
                    >
                      {data.userId.userName}
                    </Link>
                  </UserTooltip>
                  <Dot />
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <small className="opacity-50 cursor-default">
                          {formatRelativeDate(data.createdAt)}
                        </small>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" align="start">
                        {formatDate(
                          data.createdAt,
                          "EEEE, d MMMM, yyyy, HH:mm",
                          {
                            locale: vi,
                          }
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                {data.userId._id === currentData._id && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowDeteteComment(true)}
                  >
                    <Trash2 className="size-5" />
                  </Button>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">{data.context}</span>
                <div
                  className="flex w-fit gap-1 items-center cursor-pointer rounded-full hover:bg-muted p-2"
                  onClick={() => mutation.mutate(data._id)}
                >
                  <Heart
                    className={cn(
                      "size-5",
                      isLike && "fill-red-500 text-red-500"
                    )}
                  />
                  <small>{formmatNumber(data.likes.length)}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DialogDeleteComment = ({ open, onOpenChange, postId, commentId }) => {
  const mutation = useDeleteCommentMutation(postId);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Xóa bình luận</DialogTitle>
          <DialogDescription>
            Bạn có chắc muốn xóa bình luận này?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Hủy</Button>
          </DialogClose>
          <LoadingButton
            variant="destructive"
            loading={mutation.isPending}
            onClick={() =>
              mutation.mutate(commentId, { onSuccess: onOpenChange(false) })
            }
          >
            Xóa
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
