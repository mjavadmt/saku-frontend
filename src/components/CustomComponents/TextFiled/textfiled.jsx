import { TextField } from "@mui/material";
import { useState } from "react";

export const CustomTextFiled = ({ ...attributes }) => {
    const [userData, setUserData] = useState({});
    const [provinceId, setProvinceId] = useState(-1);
    const handleChange = (e, val) => {
        let data = { ...userData };
        data[e.target.name] = e.target.value;
        if (e.target.name === "province") {
            setProvinceId(val.props.id);
            data["city"] = "";
        }
        setUserData(data);
    };

    return (
        <TextField
            fullWidth
            //multiline
            onChange={handleChange}
            required
            variant='outlined'
            {...attributes}
        />
    );
};
