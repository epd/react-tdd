import React from 'react';

const List = ({items}) => (
    <ul>
        {items.map((item, idx) => (
            <li key={idx}>{item}</li>
        ))}
    </ul>
);

export default List;
