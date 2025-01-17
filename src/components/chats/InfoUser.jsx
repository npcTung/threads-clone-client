import { cn, formatRelativeDate } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  ScrollArea,
  Skeleton,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";
import icons from "@/lib/icons";
import useCurrentStore from "@/zustand/useCurrentStore";
import { InfiniteScrollContainer, LoadingButton, UserAvatar } from "..";
import { toast } from "sonner";
import useConversationStore from "@/zustand/useConversationStore";
import { getAllUsers, updateNameConversation } from "./actions";
import { useInfiniteQuery } from "@tanstack/react-query";
import useDebounce from "@/hooks/useDebounce";

const { X, Clock3, UserX, LoaderCircle } = icons;

const InfoUser = ({ className }) => {
  const { conversation } = useConversationStore();

  return (
    <div className={cn(className)}>
      {/* Info header */}
      <InfoHeader
        className={
          "sticky border-b border-muted flex flex-row items-center justify-between w-full px-6 py-[22.5px]"
        }
      />
      {/* Info body */}
      <InfoBody className={"max-h-full grow"} data={conversation} />
      {/* Info footer */}
      {conversation.participants.length <= 0 && (
        <InfoFooter
          className={"sticky bottom-0 border-t border-muted px-6 py-5"}
        />
      )}
    </div>
  );
};

export default InfoUser;

const InfoHeader = ({ className }) => {
  const { isInfoOpen, setIsInfoOpen } = useConversationStore();

  return (
    <div className={cn(className)}>
      <div className="text-primary font-semibold text-lg cursor-default">
        Thông tin người dùng
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsInfoOpen(isInfoOpen)}
      >
        <X className="size-5" />
      </Button>
    </div>
  );
};

const InfoBody = ({ className, data }) => {
  const { currentData } = useCurrentStore();
  const [isShowEditConversation, setIsShowEditConversation] = useState(false);
  const [isShowAddParticiants, setIsShowAddParticiants] = useState(false);
  const [isShowSelectUser, setIsShowSelectUser] = useState(false);
  const userConversation = data?.participants.filter(
    (el) => el._id !== currentData._id
  );

  const isStatus = () => {
    const seen = new Set();
    if (userConversation.length >= 2) {
      for (let user of userConversation) {
        if (seen.has(user.status)) return true;
        seen.add(user.status);
      }
      return false;
    } else return userConversation[0].status === "Online";
  };

  return (
    <div className={cn(className)}>
      <DialogEditNameConversation
        open={isShowEditConversation}
        onOpenChange={setIsShowEditConversation}
        data={data}
      />
      <DialogAddParticipants
        open={isShowAddParticiants}
        onOpenChange={setIsShowAddParticiants}
        data={data}
      />
      <DialogSelectUser
        open={isShowSelectUser}
        onOpenChange={setIsShowSelectUser}
        data={data.participants}
      />
      <div className="flex justify-center my-8">
        <UserAvatar
          avatarUrl={
            !userConversation.length >= 2 && userConversation.avatarUrl
          }
          displayName={
            userConversation.length >= 2
              ? data.nameConversation
              : userConversation[0].displayName
          }
          className={"size-32"}
        />
      </div>
      <div className="px-6 space-y-1 flex flex-col">
        <span className="text-lg font-medium">
          {userConversation.length >= 2
            ? data.nameConversation
            : userConversation[0].displayName}
        </span>
        <span className="text-sm line-clamp-2 whitespace-pre-line opacity-50">
          {userConversation.bio}
        </span>
      </div>
      <div className="px-6 my-6">
        <div className="flex flex-row items-center space-x-2">
          <Clock3 className="size-5 opacity-50" />
          <span
            className={cn(
              "font-medium",
              isStatus() ? "text-green-600" : "opacity-50"
            )}
          >
            {isStatus()
              ? "Đang hoạt động"
              : userConversation.status_expiry_time
              ? formatRelativeDate(userConversation.status_expiry_time)
              : "Offline"}
          </span>
        </div>
      </div>
      <div className="px-6 my-6 flex flex-col justify-center space-y-5">
        <div
          className="border-b w-full cursor-pointer hover:underline transition-all"
          onClick={setIsShowEditConversation}
        >
          Sửa tên nhóm
        </div>
        <div
          className="border-b w-full cursor-pointer hover:underline transition-all"
          onClick={setIsShowAddParticiants}
        >
          Thêm thành viên
        </div>
        <div
          className="border-b w-full cursor-pointer hover:underline transition-all"
          onClick={setIsShowSelectUser}
        >
          Xem số lượng thành viên
        </div>
      </div>
    </div>
  );
};

const InfoFooter = ({ className }) => {
  const [isShowBlockUser, setIsShowBlockUser] = useState(false);

  return (
    <div className={cn(className)}>
      <DialogBlockConversation
        open={isShowBlockUser}
        onOpenChange={setIsShowBlockUser}
      />
      <TooltipIcon
        className={"h-[52px] text-red-600"}
        context={"Chặn tài khoản"}
        onClick={() => setIsShowBlockUser(true)}
      >
        <UserX className="size-5" />
        <span className="text-sm">Chặn</span>
      </TooltipIcon>
    </div>
  );
};

const TooltipIcon = ({ children, context, onClick, className }) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn("w-full space-x-1", className)}
            onClick={() => onClick && onClick()}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="end">
          {context}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const DialogBlockConversation = ({ open, onOpenChange }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSumbit = () => {
    setIsLoading(true);
    const setTimeoutId = setTimeout(() => {
      try {
        toast.success("Chặn tài khoản thành công.");
        onOpenChange(false);
      } catch (error) {
        toast.error(error.message);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }, 2000);

    return () => clearTimeout(setTimeoutId);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chặn tài khoản</DialogTitle>
          <DialogDescription>
            Bạn có chắc muốnchặn tài khoản này?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
            Hủy
          </DialogClose>
          <LoadingButton
            variant="outline"
            loading={isLoading}
            disabled={isLoading}
            onClick={handleSumbit}
          >
            Chặn
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const DialogEditNameConversation = ({ open, onOpenChange, data }) => {
  const [value, setValue] = useState(data.nameConversation);
  const [loading, setLoading] = useState(false);
  const { setConversation } = useConversationStore();

  const handleSumbit = async () => {
    setLoading(true);
    try {
      const respones = await updateNameConversation(data._id, {
        nameConversation: value,
      });
      if (respones.success) setConversation(respones.data);
    } catch (error) {
      toast.error(error.mes);
    } finally {
      setLoading(false);
      setValue("");
      onOpenChange(false);
      toast.success("Cập nhật tên nhóm thành công.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sửa tên nhóm</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <Input
          placeholder="Nhập tên nhóm..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Hủy</Button>
          </DialogClose>
          <LoadingButton
            variant="outline"
            loading={loading}
            disabled={loading || !value.trim()}
            onClick={handleSumbit}
          >
            Cập nhật
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const DialogAddParticipants = ({ open, onOpenChange, data }) => {
  const recipients = [];
  const [name, setName] = useState({ q: null });
  const [userConversations, setUserConversations] = useState([]);
  const { currentData } = useCurrentStore();
  const queriesDebounce = useDebounce({ ...name, recipients }, 800);

  const {
    data: userDatas,
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

  const users = userDatas?.pages.flatMap((page) => page.users) || [];

  const onClose = () => {
    setName({ q: null });
    setUserConversations([]);
    onOpenChange();
  };

  useEffect(() => {
    const participants = data.participants
      .filter((item) => item._id !== currentData._id)
      .map((participant) => participant._id);
    const recipientsArr = userConversations.map((user) => user._id);
    recipients.push(...participants, ...recipientsArr);
  }, [userConversations]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm thành viên</DialogTitle>
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
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Hủy</Button>
          </DialogClose>
          <Button variant="outline">Thêm thành viên</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const DialogSelectUser = ({ open, onOpenChange, data }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Danh sách thành viên</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="max-h-[500px]">
          <ScrollArea className="h-full">
            <div className="flex flex-col space-y-5">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between space-x-2 rounded-md p-2 bg-muted hover:bg-muted-foreground cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <UserAvatar
                      avatarUrl={item?.avatarUrl}
                      displayName={item?.displayName}
                      isOnline={item?.status}
                      className="border border-primary"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {item?.displayName}
                      </span>
                      <small>{item?.userName}</small>
                    </div>
                  </div>
                  <Button variant="outline">
                    <small>Xóa</small>
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
