import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui";
import icons from "@/lib/icons";
import { InfiniteScrollContainer, UserAvatar, useTheme } from ".";
import { cn } from "@/lib/utils";
import useCurrentStore from "@/zustand/useCurrentStore";
import { useBlockAccount } from "@/hooks/useCurrentData";
import * as apis from "@/apis";
import { useInfiniteQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";
import { vi } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import path from "@/lib/path";

const { ChevronRight, ArrowLeft, Trash2, Sun, Moon, LoaderCircle, Dot } = icons;

const valueTitle = (title) => {
  switch (title) {
    case "block_user":
      return "Danh sách tài khoản bị chặn";
    case "dark":
      return "Đổi chế độ: Tối";
    case "ligth":
      return "Đổi chế độ: Sáng";
    case "history":
      return "Nhật ký hoạt động";

    default:
      return "Cài đặt";
  }
};

const DialogSetting = ({ open, onOpenChange }) => {
  const [title, setTitle] = useState("setting");
  const [dateActives, setDateActives] = useState([]);
  const [dateActive, setDateActive] = useState(null);

  useEffect(() => {
    if (dateActives.length) setDateActive(dateActives[0]);
  }, [dateActives]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-sm:max-w-none max-sm:size-full">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <ArrowLeft
                className={cn(
                  "size-5 cursor-pointer",
                  title === "setting" && "hidden"
                )}
                onClick={() => setTitle("setting")}
              />
              <span>{valueTitle(title)}</span>
            </div>
            <div className={cn(title !== "history" && "hidden")}>
              <SelectOption
                data={dateActives}
                setDateActive={setDateActive}
                dateActive={dateActive}
              />
            </div>
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className={"w-full max-h-[500px]"}>
          <ListSetting
            className={cn("space-y-5", title !== "setting" && "hidden")}
            setTitle={setTitle}
          />
          <ListBlockUser className={cn(title !== "block_user" && "hidden")} />
          <DarkModeSetting
            setTitle={setTitle}
            className={cn(title !== "dark" && title !== "ligth" && "hidden")}
          />
          <HistoryLog
            className={cn(
              "p-2 border rounded-md h-full",
              title !== "history" && "hidden"
            )}
            onOpenChange={onOpenChange}
            setDateActives={setDateActives}
            dateActive={dateActive}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSetting;

const ListSetting = ({ className, setTitle }) => {
  const { theme } = useTheme();

  return (
    <div className={cn(className)}>
      <Button
        variant="outline"
        className="w-full flex items-center justify-between"
        onClick={() => setTitle("block_user")}
      >
        <span>Danh sách tài khoản bị chặn</span>
        <ChevronRight className="size-5" />
      </Button>
      <Button
        variant="outline"
        className="w-full flex items-center justify-between"
        onClick={() => setTitle(theme)}
      >
        <span>{`Đổi chế độ: ${theme === "dark" ? "Tối" : "Sáng"}`}</span>
        <ChevronRight className="size-5" />
      </Button>
      <Button
        variant="outline"
        className="w-full flex items-center justify-between"
        onClick={() => setTitle("history")}
      >
        <span>Nhật ký hoạt động</span>
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
};

const ListBlockUser = ({ className }) => {
  const { currentData } = useCurrentStore();
  const blockUser = useBlockAccount();

  return (
    <ScrollArea className={cn(className)}>
      <div className="space-y-2 p-2">
        {currentData.blockedUsers.length > 0 ? (
          currentData.blockedUsers.map((el) => (
            <div
              key={el._id}
              className="flex items-center justify-between p-2 border rounded-md border-muted hover:bg-muted/50 transition-all"
            >
              <div className="flex items-center space-x-3">
                <UserAvatar
                  avatarUrl={el.avatarUrl}
                  displayName={el.displayName}
                />
                <div className="flex flex-col space-y-0.5 cursor-pointer">
                  <span className="font-semibold">{el.displayName}</span>
                  <small>{el.userName}</small>
                </div>
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => blockUser.blockAccount(el._id)}
              >
                <Trash2 className="size-5" />
              </Button>
            </div>
          ))
        ) : (
          <div className="size-full flex items-center justify-center">
            Không có tài khoản nào bị chặn
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

const DarkModeSetting = ({ className, setTitle }) => {
  const { theme, setTheme } = useTheme();

  const handleSubmit = (value) => {
    setTheme(value);
    setTitle(value);
  };

  return (
    <div className={cn(className)}>
      <div className="flex items-center space-x-3 border border-muted rounded-md p-2">
        <div
          className={cn(
            "p-2 flex-1 border shadow-md rounded-md bg-muted cursor-pointer flex items-center space-x-2",
            theme === "dark" ? "opacity-50" : "opacity-100"
          )}
          onClick={() => handleSubmit("ligth")}
        >
          <Sun className="size-5" />
          <span className="text-sm font-medium">Sáng</span>
        </div>
        <div
          className={cn(
            "p-2 flex-1 border shadow-md rounded-md bg-muted cursor-pointer flex items-center space-x-2",
            theme === "ligth" ? "opacity-50" : "opacity-100"
          )}
          onClick={() => handleSubmit("dark")}
        >
          <Moon className="size-5" />
          <span className="text-sm font-medium">Tối</span>
        </div>
      </div>
    </div>
  );
};

const getActivityLogs = async (cursor) => {
  const response = await apis.getActivityLogs({ cursor });
  if (response.success)
    return {
      activityLogs: response.data,
      nextCursor: response.nextCursor,
    };
};

const HistoryLog = ({
  className,
  onOpenChange,
  setDateActives,
  dateActive,
}) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["activity-logs"],
    queryFn: ({ pageParam }) => getActivityLogs(pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.nextCursor,
    staleTime: 5000,
  });

  const activityLogs =
    data?.pages
      .flatMap((page) => page?.activityLogs)
      .filter((el) => el !== undefined) || [];

  const navigate = useNavigate();

  const onClickLink = (activityLog) => {
    navigate(
      activityLog.type !== "Follow"
        ? `/${path.POSTS}/${activityLog.postId._id}`
        : path.HOME + activityLog.userId._id
    );
    onOpenChange(false);
  };

  const groupPostsByDate = activityLogs.reduce((acc, activityLog) => {
    const date = formatDate(activityLog.createdAt, "yyy-MM-dd");
    if (!acc[date]) acc[date] = [];
    acc[date].push(activityLog);
    return acc;
  }, {});

  useEffect(() => {
    const dateArr = [];
    for (let date in groupPostsByDate) dateArr.push(date);
    setDateActives([...new Set(dateArr)]);
  }, [status]);

  return (
    <div className={cn(className)}>
      <ScrollArea className="size-full pr-3 overflow-hidden rounded-md">
        {status === "pending" && (
          <LoaderCircle className="size-5 animate-spin" />
        )}
        {status === "success" && !activityLogs.length && !hasNextPage && (
          <div className="p-5 flex items-center justify-center">
            <span className="text-center text-destructive">
              Không có nhật ký nào.
            </span>
          </div>
        )}
        {status === "error" && (
          <div className="p-5 flex items-center justify-center">
            <span className="text-center text-destructive">
              Đã xảy ra lỗi khi tải nhật ký.
            </span>
          </div>
        )}
        <InfiniteScrollContainer
          onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
          className="space-y-2 h-full"
        >
          {dateActive &&
            groupPostsByDate[dateActive].map((activityLog, idx) => (
              <div key={activityLog._id}>
                {idx === 0 && (
                  <span className="text-sm font-bold">
                    {formatDate(dateActive, "d MMMM, yyyy", { locale: vi })}
                  </span>
                )}
                <div
                  onClick={() => onClickLink(activityLog)}
                  className="p-2 bg-muted flex items-end justify-between cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <UserAvatar
                      avatarUrl={activityLog.postId.fileUrls[0]?.url}
                      displayName={activityLog.postId.filenames[0]}
                      className={"border border-muted-foreground size-[60px]"}
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-1 text-sm whitespace-nowrap">
                        <span className="font-bold">Bạn</span>
                        <span>
                          {activityLog.type === "Like" && "thích bài viết"}
                          {activityLog.type === "Post" && "tạo bài viết mới"}
                          {activityLog.type === "Like_Comment" &&
                            "thích bình luận"}
                          {activityLog.type === "Comment" &&
                            "bình luận vào bài viết"}
                          {activityLog.type === "Follow" && "theo dõi"}
                        </span>
                        <span
                          className={cn(
                            "font-bold",
                            activityLog.type === "Post" && "hidden"
                          )}
                        >
                          của
                        </span>
                        <span
                          className={cn(
                            "text-sm",
                            activityLog.type === "Post" && "hidden"
                          )}
                        >
                          {activityLog.postId.postedBy._id ===
                          activityLog.userId._id
                            ? "bạn"
                            : activityLog.postId.postedBy.displayName}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span>{activityLog.postId.context}</span>
                        {activityLog.commentId && (
                          <>
                            <Dot className="size-5" />
                            <span>{activityLog.commentId.context}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <small>{formatDate(activityLog.createdAt, "HH:mm")}</small>
                </div>
              </div>
            ))}
          {isFetchingNextPage && (
            <LoaderCircle className="size-5 animate-spin" />
          )}
        </InfiniteScrollContainer>
      </ScrollArea>
    </div>
  );
};

const SelectOption = ({ data, setDateActive, dateActive }) => {
  return (
    <Select onValueChange={(value) => setDateActive(value)} value={dateActive}>
      <SelectTrigger className="max-w-[200px] px-2">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {data.map((date, idx) => (
          <SelectItem key={idx} value={date}>
            {formatDate(date, "d MMMM, yyyy", { locale: vi })}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
