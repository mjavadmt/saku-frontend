const tableStyles = {
    table: {
        style: {
            borderRadius: "15px !important",
            marginTop: "2px",
            height: "312px",
            backgroundColor: "#161a49",
        },
    },
    tableWrapper: {
        style: {
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
        },
    },
    headRow: {
        style: {
            backgroundColor: "#161a49",
            color: "white",
            borderBottomColor: "white",
        },
    },
    noData: {
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#161a49",
            color: "white",
        },
    },
};

export default tableStyles;
