import React from 'react';

interface PropsInterface {
    isClose: boolean
};

//**
//  Need to be "T extends PropsInterface" for correct work of useModal hook
//**

export const UploadModal = <T extends PropsInterface>  (props: T) => {
    return (
        <div>
            Upload component
        </div>
    );
};
