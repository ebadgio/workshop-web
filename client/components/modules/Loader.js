import React from 'react';
import styled from 'react-emotion';

import {PageWrapper} from "../elements";

export const Loader = styled('div')`
    border: 8px solid rgba(0,0,0,0);
    border-radius: 50%;
    border-top: 8px solid #8c9eff;
    width: 60px;
    height: 60px;
    -webkit-animation: spin .5s linear infinite; /* Safari */
    animation: spin .5s linear infinite;
    margin: 0 auto;
`;

