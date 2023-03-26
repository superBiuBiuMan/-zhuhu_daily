import React from 'react';
import {useButtonLoading,ButtonLoadingProps} from "./types"
import {Button} from "antd-mobile";
const ButtonLoading:React.FC<ButtonLoadingProps> = (props) => {
    const {loading,content,handleClick,btnProps } = useButtonLoading(props);
    return (
        <div>
            <Button {...btnProps} disabled={loading} onClick={handleClick} >
                { loading ? content : props.children }
            </Button>
        </div>
    );
};

export default ButtonLoading;
