import React, { memo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  ScrollArea,
} from "../ui";
import { formatRelativeDate } from "@/lib/utils";

const DialogEditHistory = ({ open, onOpenChange, data }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Lịch sử chỉnh sửa</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="flex flex-col max-h-[500px]">
          <ScrollArea className="w-full">
            {data?.map((history) => (
              <div
                key={history._id}
                className="flex items-center justify-between border-b space-y-5"
              >
                <span className="line-clamp-1">{history.context}</span>
                <small className="opacity-50">
                  {formatRelativeDate(history.createdAt)}
                </small>
              </div>
            ))}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default memo(DialogEditHistory);
