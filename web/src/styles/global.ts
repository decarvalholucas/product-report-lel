import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    boxSizing: "border-box",
    padding: 0,
  },
  "html, body": {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "16px",
    color: "#333",
    margin: 0,
    padding: 0,
    backgroundColor: "#F2F4F5"
  },
  a: {
    color: "#0366d6",
    textDecoration: "none",
  },
});
