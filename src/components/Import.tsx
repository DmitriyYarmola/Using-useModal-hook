import React from 'react';

interface PropsInterface {
    isOpen?: boolean
};

//**
//  Need to be "T extends PropsInterface" for correct work of useModal hook
//**

export const ImportModal= <T extends PropsInterface>(props: T) => {
    return (
        <div>
            Import component
        </div>
    );
};
