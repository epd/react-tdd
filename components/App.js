import React, {useState} from 'react';

import Button from './Button';
import List from './List';

import {getOfficesList} from '../api';

const App = () => {
    const [offices, setOfficesList] = useState([]);
    const retreiveAndRenderOffices = () =>
        getOfficesList().then(setOfficesList);

    if (offices.length) {
        return <List items={offices} />;
    }

    return <Button onClick={retreiveAndRenderOffices} text="Load Offices" />;
};

export default App;
