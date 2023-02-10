import { styled } from "@stitches/react";

export const Container = styled("section", {
  maxWidth: "60%",
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  justifyContent: "center",
  margin: "20px auto",
  backgroundColor: "#FFF",
  border: "1px solid #e3e4e6;",
  borderRadius: "5px",
  "& > .title": {
    fontSize: "24px",
    marginBottom: "10px",
    padding: "10px 0",
    fontWeight: "bold",
  },
  "& > .search": {
    marginBottom: "30px",
    display: "flex",
    "& > input": {
      padding: "18px",
      boxShadow: "none",
      width: "35%",
      border: "1px solid #cecece",
      fontSize: "22px",
    },
    "& > .searchIcon ": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItem: "center",
      border: "1px solid #cecece",
      borderLeft: "none",
      padding: "0 20px",
      cursor: "pointer",
    },
  },
  "& > .productName": {
    width: "100%",
    cursor: "pointer",
    borderTop: "1px solid #cecece",
    padding: "20px 10px",
    color: "#3f3f40",
    fontWeight: "",
    fontSize: "20px",
    textTransform: "uppercase",
    transition: "0.2s",
    "&:hover": {
      backgroundColor: "#e3e8ff",
      color: "blue"
    },
  },
});
