import { Box } from "@chakra-ui/react";
import React from "react";

const RedCircle = () => {
  return (
    <Box
      marginInlineStart="2"
      display="inline-block"
      width="8px"
      height="8px"
      borderRadius="50%"
      bg="primary.red"
    ></Box>
  );
};

export default RedCircle;
