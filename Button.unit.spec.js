import React from 'react';
import {shallow} from 'enzyme';

import Button from './Button';

describe('Button', () => {
    it('should render with the provided text', () => {
        const wrapper = shallow(<Button text="Hola, Villena" />);

        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('button').prop('type')).toBe('submit');
        expect(wrapper.find('button').text()).toBe('Hola, Villena');

        wrapper.setProps({text: 'Adios, Villena'});

        expect(wrapper.find('button').text()).toBe('Adios, Villena');
    });
});
