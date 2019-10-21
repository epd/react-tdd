import React from 'react';

import {conditionalCaseTransform} from '../utils';

const List = ({items}) => (
    <ul>
        {items.map((item, idx) => (
            <li key={idx}>{conditionalCaseTransform(item, idx)}</li>
        ))}
    </ul>
);

export default List;
