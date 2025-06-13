import React from 'react';

import { ButtonRed, ButtonWithe } from './styles';

// eslint-disable-next-line react/prop-types
function Button({ children, red }) {
    return (
    <>
        { red ? (
            <ButtonRed>{children}</ButtonRed>
            ) : (
            <ButtonWithe>{children}</ButtonWithe>
        )}
    </>
    ) 
}

export default Button;