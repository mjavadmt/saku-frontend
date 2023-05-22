import Button from "@mui/material/Button";

export const CustomButton = ({ children, ...attributes }) => {
    return (
        <Button variant='contained' className='w-1/6 h-10' {...attributes}>
            {children}
        </Button>
    );
};
