import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllUsers, sendMessage } from "./actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Input,
  ScrollArea,
  Skeleton,
} from "../ui";
import {
  Divider,
  InfiniteScrollContainer,
  LoadingButton,
  UserAvatar,
} from "..";
import icons from "@/lib/icons";
import useDebounce from "@/hooks/useDebounce";
import useAppStore from "@/zustand/useAppStore";
import { toast } from "sonner";

const { TriangleAlert, LoaderCircle, X, SendHorizontal } = icons;

const DialogCreateConversation = ({ open, onOpenChange }) => {
  const [name, setName] = useState({ q: null });
  const [inputMessage, setInputMessage] = useState("");
  const [userConversations, setUserConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const queriesDebounce = useDebounce(
    { ...name, recipients: userConversations.map((user) => user._id) },
    800
  );
  const queryClient = useQueryClient();
  const { isShowCreateConversation } = useAppStore();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["users", queriesDebounce],
    queryFn: ({ pageParam }) => getAllUsers(queriesDebounce, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.nextCursor,
    staleTime: 5000,
  });

  const users = data?.pages.flatMap((page) => page.users) || [];

  const handleSubmit = async () => {
    if (inputMessage !== "") {
      setIsLoading(true);
      try {
        const payload = {
          recipients: userConversations.map((user) => user._id),
          content: inputMessage,
        };
        const respone = await sendMessage(payload);
        queryClient.invalidateQueries(["conversations"]);
        if (respone) {
          toast.success("Tạo phòng trò chuyện thành công.");
          onClose();
        }
      } catch (error) {
        toast.error(error.mess);
        console.error(error.mess);
      } finally {
        setIsLoading(false);
      }
    } else toast.warning("Vui lòng nhập tin nhắn.");
  };

  const onClose = () => {
    setName({ q: null });
    setInputMessage("");
    setUserConversations([]);
    onOpenChange(isShowCreateConversation);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-xl:size-full max-xl:max-w-none">
        <DialogHeader>
          <DialogTitle>Tạo cuộc trò chuyện mới</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="flex flex-col space-y-5">
          <Input
            placeholder="Tên người dùng hoặc email"
            className="w-full rounded-md bg-muted"
            onChange={(e) => setName({ q: e.target.value.trim() || null })}
            value={name.q || ""}
          />
          {userConversations.length > 0 && (
            <div className="max-h-[100px]">
              <ScrollArea className="h-full">
                <div className="flex flex-wrap gap-2">
                  {userConversations.map((userConversation) => (
                    <div
                      key={userConversation._id}
                      className="w-fit flex items-center space-x-2 rounded-full bg-muted p-2"
                    >
                      <small className="cursor-default whitespace-nowrap">
                        {userConversation.userName}
                      </small>
                      <X
                        className="size-4 cursor-pointer"
                        onClick={() =>
                          setUserConversations((prevs) =>
                            prevs.filter(
                              (item) => item._id !== userConversation._id
                            )
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
          <div className="flex space-x-2">
            <Input
              placeholder="Nhập tin nhắn..."
              className="w-full rounded-md bg-muted"
              onChange={(e) => setInputMessage(e.target.value)}
              value={inputMessage}
            />
            <LoadingButton
              variant="ghost"
              className={"border border-muted"}
              loading={isLoading}
              onClick={handleSubmit}
              disabled={isLoading || !inputMessage.trim()}
            >
              <SendHorizontal className="size-5 -rotate-45 opacity-50" />
            </LoadingButton>
          </div>
          <Divider />
          <ScrollArea className="h-[300px]">
            {status === "pending" && (
              <div className="space-y-2 max-w-full">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={idx} className="flex items-center space-x-4 w-full">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 w-full">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {status === "success" && !users.length && !hasNextPage && (
              <span className="text-center text-destructive">
                Không có người dùng nào.
              </span>
            )}
            {status === "error" && (
              <div className="max-w-full max-h-full flex flex-col items-center justify-center space-y-5 opacity-50">
                <TriangleAlert className="size-20" />
                <span className="font-semibold">Lỗi</span>
              </div>
            )}
            <InfiniteScrollContainer
              onBottomReached={() =>
                hasNextPage && !isFetching && fetchNextPage()
              }
              className="max-h-full space-y-5 pr-3"
            >
              {users.map((user, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border rounded-md p-2 bg-muted hover:bg-muted-foreground cursor-pointer"
                  onClick={() => {
                    name.q && setName({ q: null });
                    setUserConversations((prev) => [...prev, user]);
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <UserAvatar
                      avatarUrl={user?.avatarUrl}
                      displayName={user?.displayName}
                      isOnline={user?.status}
                      className="border border-primary"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {user?.displayName}
                      </span>
                      <small>{user?.userName}</small>
                    </div>
                  </div>
                </div>
              ))}
              {isFetchingNextPage && (
                <LoaderCircle className="mx-auto size-5 animate-spin" />
              )}
            </InfiniteScrollContainer>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateConversation;
