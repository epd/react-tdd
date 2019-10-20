import React from 'react';

const doSomeListMagic = (item, idx) =>
    idx % 2 === 0 ? item.toUpperCase() : item.toLowerCase();

const List = ({items}) => (
    <ul>
        {items.map((item, idx) => (
            <li key={idx}>{doSomeListMagic(item, idx)}</li>
        ))}

        {/* <li key={idx}>{item.toUpperCase()}</li> */}
    </ul>
);

export default List;
