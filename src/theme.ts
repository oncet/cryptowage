import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  components: {
    Stat: {
      baseStyle: (props) => ({
        container: {
          background: mode("gray.100", "purple.900")(props),
          borderRadius: "md",
          px: "4",
          py: "2",
        },
      }),
    },
    Link: {
      baseStyle: (props) => ({
        textDecoration: "underline",
        color: mode("blue.600", "blue.300")(props),
      }),
      variants: {
        menu: (props) => ({
          color: mode("black", "white")(props),
          textDecoration: "none",
        }),
      },
    },
  },
});
