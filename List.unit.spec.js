import React from 'react';
import {shallow} from 'enzyme';

import List from './List';

describe('List', () => {
    it('should render everything in the list', () => {
        const items = [
            'Villena',
            'Madrid',
            'San Francisco',
            'Nashville',
            'Vancouver',
        ];

        const wrapper = shallow(<List items={items} />);

        expect(wrapper.find('li').length).toBe(5);
        expect(wrapper.find('li').at(0).text()).toBe('Villena'); // prettier-ignore
        expect(wrapper.find('li').at(1).text()).toBe('Madrid'); // prettier-ignore
        expect(wrapper.find('li').at(2).text()).toBe('San Francisco'); // prettier-ignore
        expect(wrapper.find('li').at(3).text()).toBe('Nashville'); // prettier-ignore
        expect(wrapper.find('li').at(4).text()).toBe('Vancouver'); // prettier-ignore

        // expect(wrapper.find('ul').text()).toBe(items.join(''));
        // expect(wrapper.find('ul')).toMatchSnapshot();
    });
});
