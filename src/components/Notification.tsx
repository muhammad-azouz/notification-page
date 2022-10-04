import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import RedCircle from "./RedCircle";

interface INotificationProps {
  avatar: string;
  profileName: string;
  notificationType:
    | "reacted to your recent post"
    | "followed you"
    | "has joined your group"
    | "sent you a private message"
    | "commented on your picture"
    | "left the group Chess Club";
  postTitle: string | null;
  groupTitle: string | null;
  time: string;
  unread: boolean;
  msgContent: string | null;
  yourPicture: string | null;
}

function Notification({
  avatar,
  profileName,
  notificationType,
  postTitle,
  groupTitle,
  time,
  unread,
  msgContent,
  yourPicture: senderImg,
}: INotificationProps) {
  return (
    <Flex
      gap={4}
      bg={unread ? "neutral.background" : ""}
      p="5"
      borderRadius="lg"
      alignItems="start"
      mb="2"
      _last={{
        mb: 0,
      }}
    >
      <Avatar src={avatar} />

      {/* notification content */}
      <Box>
        {/* notification user name */}
        <Text
          marginInlineEnd={1.5}
          fontWeight={800}
          display="inline"
          _hover={{ color: "primary.blue", fontWeight: 800, cursor: "pointer" }}
        >
          {profileName}
        </Text>

        <Text display="inline" color="neutral.DarkGrayishBlue">
          {notificationType}
        </Text>

        {/* Post Title */}
        <Text
          marginInlineStart={1.5}
          display={postTitle === "" ? "none" : "inline"}
          color="neutral.DarkGrayishBlue"
          fontWeight="800"
          _hover={{ color: "primary.blue", fontWeight: 800, cursor: "pointer" }}
        >
          {postTitle}
        </Text>

        {/* Group Title */}
        <Text
          marginInlineStart={1.5}
          display={groupTitle === "" ? "none" : "inline"}
          color="primary.blue"
          fontWeight="800"
          _hover={{ cursor: "pointer" }}
        >
          {groupTitle}
        </Text>

        {unread && <RedCircle />}

        <br />

        <Text color="neutral.GrayishBlue">{time}</Text>
        {msgContent && (
          <Text
            borderRadius="md"
            border="1px"
            borderColor="neutral.LightGrayishBlue1"
            color="neutral.DarkGrayishBlue"
            shadow="sm"
            px="5"
            py="3"
            mt="4"
            _hover={{ bg: "neutral.LightGrayishBlue1", cursor: "pointer" }}
          >
            {msgContent}
          </Text>
        )}
      </Box>
      {senderImg && (
        <Flex flexGrow={1} justifyContent="flex-end">
          <Avatar
            size="md"
            _hover={{
              outline: "3px solid",
              cursor: "pointer",
              outlineColor: "neutral.LightGrayishBlue1",
            }}
            borderRadius="lg"
            src={senderImg}
          />
        </Flex>
      )}
    </Flex>
  );
}

export default Notification;
