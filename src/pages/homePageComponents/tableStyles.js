const tableStyles = {
  table: {
    style: {
      borderRadius: "15px !important",
      marginTop: "2px",
      height: "312px",
      backgroundColor: "#161a49",
      // border: "2px solid red"
    },
  },
  tableWrapper: {
    style: {
      //   display: "table",
      borderRadius: "inherit",
      marginBottom: "3px",
    },
  },
  rows: {
    style: {
      minHeight: "50px",
      backgroundColor: "#161a49",
      color: "white",
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "white",
      },
      // borderBottomColor : "white"
    },
  },
  headRow: {
    style: {
      backgroundColor: "#161a49",
      color: "white",
      borderBottomColor: "white",
    },
  },
};

export default tableStyles;
