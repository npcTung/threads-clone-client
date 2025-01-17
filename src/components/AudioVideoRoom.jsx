import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui";
import icons from "@/lib/icons";
import { UserAvatar } from ".";
import useCurrentStore from "@/zustand/useCurrentStore";
// import stringeeConfing from "@/lib/stringeeConfig";
import useCallStore from "@/zustand/useCallStore";

const { Mic, MicOff, Phone, Video, VideoOff } = icons;

const AudioVideoRoom = ({ open, onOpenChange, video, data }) => {
  const [isMic, setIsMic] = useState(true);
  const [isVideo, setIsVideo] = useState(true);
  const { currentData } = useCurrentStore();
  // const { call } = stringeeConfing();
  const { isCall } = useCallStore();

  // useEffect(() => {
  //   if (isMic) call?.unmute();
  //   else call?.mute();
  // }, [isMic]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Video Room</DialogTitle>
          <DialogDescription />
          <div className="flex flex-col space-x-6">
            {/* video feed */}
            <div className="grid grid-cols-2 gap-4 h-[200px] mb-4">
              {/* current call */}
              <div className="relative size-full bg-muted rounded-md flex items-center justify-center">
                <div className="space-y-2 flex flex-col items-center justify-center">
                  <UserAvatar
                    avatarUrl={currentData.avatarUrl}
                    displayName={currentData.displayName}
                    className={"size-20 border border-primary"}
                  />
                  <div className="text-sm font-medium opacity-50">
                    {currentData.displayName}
                  </div>
                  {!isMic && (
                    <MicOff className="absolute top-2 right-2 size-5 opacity-50" />
                  )}
                </div>
              </div>
              {/* user call */}
              <div className="relative size-full bg-muted rounded-md flex items-center justify-center">
                <div className="space-y-2 flex flex-col items-center justify-center">
                  <UserAvatar
                    avatarUrl={data.avatarUrl}
                    displayName={data.displayName}
                    className={"size-20 border border-primary"}
                  />
                  <div className="text-sm font-medium opacity-50">
                    {data.displayName}
                  </div>
                  <MicOff className="absolute top-2 right-2 size-5 opacity-50" />
                </div>
              </div>
            </div>
            {/* controls call */}
            <div className={"flex items-center justify-center space-x-3"}>
              {isCall ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-green-500 answerButton"
                >
                  <Phone className="size-5 fill-white" />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-muted"
                  onClick={() => setIsMic((prev) => !prev)}
                >
                  {isMic ? (
                    <Mic className="size-5" />
                  ) : (
                    <MicOff className="size-5" />
                  )}
                </Button>
              )}
              <DialogClose asChild>
                <Button
                  variant="destructive"
                  size="icon"
                  className={"rounded-full size-12"}
                >
                  <Phone className="size-5 rotate-[135deg]" />
                </Button>
              </DialogClose>
              {video && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-muted"
                  onClick={() => setIsVideo((prev) => !prev)}
                >
                  {isVideo ? (
                    <Video className="size-5" />
                  ) : (
                    <VideoOff className="size-5" />
                  )}
                </Button>
              )}
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AudioVideoRoom;
