import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const NotificationContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      px={{ base: 4, md: 6 }}
      pt={{ base: 4, md: 4 }}
      bg="hsl(0, 0%, 100%)"
      borderRadius="2xl"
      width={{ base: "100%", md: "720px" }}
      flexDirection="column"
      shadow="0 20px 25px #8f8f8f12"
    >
      {children}
    </Flex>
  );
};

export default NotificationContainer;
