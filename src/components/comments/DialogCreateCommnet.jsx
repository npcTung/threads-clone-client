import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { EditInput, LoadingButton, UserAvatar, useTheme } from "..";
import { useCommentMutation } from "./mutations";
import { cn, toxicLanguage } from "@/lib/utils";
import { toast } from "sonner";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import icons from "@/lib/icons";
import useAppStore from "@/zustand/useAppStore";

const { Smile } = icons;

const DialogCreateCommnet = ({ open, onOpenChange, data, postId }) => {
  const mutation = useCommentMutation(postId);
  const { isShowSmile, setIsShowSmile } = useAppStore();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ bold: false, italic: false }),
      Placeholder.configure({ placeholder: `Trả lời ${data.userName}` }),
    ],
  });

  const input = editor?.getText({ blockSeparator: "\n" }) || "";

  const onClose = () => {
    onOpenChange();
    editor.commands.clearContent();
    setIsShowSmile(false);
  };

  const addEmoji = (e) => {
    const emoji = e.native;
    if (editor) editor.chain().focus().insertContent(emoji).run();
  };

  const handleSubmit = () => {
    if (!toxicLanguage(input))
      mutation.mutate({ context: input }, { onSuccess: onClose });
    else toast.warning("Nội dung không hợp lệ.");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={"max-sm:size-full md:w-[80vh] max-w-none"}
        onClick={(e) => {
          e.stopPropagation();
          setIsShowSmile(false);
        }}
      >
        <DialogHeader>
          <DialogTitle>Bình luận</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="flex items-start justify-between gap-3">
          <UserAvatar avatarUrl={data.avatarUrl} />
          <div className="flex-1 w-full space-y-5">
            <div className="flex flex-col items-end">
              <div className="flex justify-between w-full">
                <div className="flex w-full items-center">
                  <span className="text-sm font-medium cursor-default">
                    {data.userName}
                  </span>
                </div>
              </div>
              <EditInput
                editor={editor}
                className={"max-h-[10rem] max-w-[752px] px-5 py-3"}
              />
              <EmojiButton addEmoji={addEmoji} />
            </div>
          </div>
        </div>
        <DialogFooter>
          <LoadingButton
            disabled={!input.trim()}
            loading={mutation.isPending}
            variant="outline"
            onClick={handleSubmit}
          >
            Đăng
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateCommnet;

const EmojiButton = ({ addEmoji }) => {
  const { theme } = useTheme();
  const { isShowSmile, setIsShowSmile } = useAppStore();

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          setIsShowSmile(!isShowSmile);
        }}
        className="opacity-50 hover:opacity-100 transition-all"
      >
        <Smile className="size-5" />
      </Button>
      <div
        className={cn(
          "absolute bg-muted rounded-md bottom-10",
          isShowSmile ? "block" : "hidden"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Picker
          data={data}
          icons={"solid"}
          theme={theme}
          onEmojiSelect={addEmoji}
        />
      </div>
    </div>
  );
};
