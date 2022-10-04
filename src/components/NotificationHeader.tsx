import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const NotificationHeader = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mt="2" mb="8">
      <Heading display="flex" alignItems="center" fontSize="2xl">
        Notifications
        <Flex
          marginInlineStart={2}
          display="inline-flex"
          bg="hsl(219, 85%, 26%)"
          color="white"
          borderRadius="lg"
          py="1"
          px="3"
          fontSize="lg"
          justifyContent="center"
          alignItems="center"
        >
          3
        </Flex>
      </Heading>
      <Button
        p="0"
        variant="ghost"
        color="neutral.DarkGrayishBlue"
        fontWeight="500"
        _hover={{
          color: "primary.blue",
        }}
        _active={{ bg: "transparent" }}
      >
        Mark all as read
      </Button>
    </Flex>
  );
};

export default NotificationHeader;
