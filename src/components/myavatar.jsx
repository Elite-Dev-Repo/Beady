import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
const myavatar = () => {
  return (
    <AvatarGroup className=" flex items-center gap-1">
      <Avatar>
        <AvatarImage src={avatar} className="object-cover" alt="avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatar2} className="object-cover" alt="avatar" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatar} className="object-cover" alt="avatar" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  );
};

export default myavatar;
