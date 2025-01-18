import { cn } from "@/lib/utils";
import { EditorContent } from "@tiptap/react";
import React, { memo } from "react";
import "./styles.css";
import { ScrollArea } from "./ui";
import useAppStore from "@/zustand/useAppStore";

const EditInput = ({ editor, className }) => {
  const { setIsShowSmile } = useAppStore();

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <ScrollArea className={cn("w-full", className)}>
      <EditorContent
        editor={editor}
        className={cn("w-full", className)}
        onClick={() => setIsShowSmile(false)}
      />
    </ScrollArea>
  );
};

export default memo(EditInput);
