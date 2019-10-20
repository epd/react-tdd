import React from 'react';
import {shallow} from 'enzyme';

import Button, {buttonClickHandler} from './Button';

describe('Button', () => {
    it('should render with the provided text', () => {
        const wrapper = shallow(<Button text="Hola, Villena" />);

        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('button').prop('type')).toBe('submit');
        expect(wrapper.find('button').text()).toBe('Hola, Villena');

        wrapper.setProps({text: 'Adios, Villena'});

        expect(wrapper.find('button').text()).toBe('Adios, Villena');
    });

    it('should invoke its handler on click', () => {
        const mockClickHandler = jest.fn();
        const wrapper = shallow(
            <Button text="Hola, Villena" onClick={mockClickHandler} />,
        );

        wrapper.find('button').simulate('click');

        expect(mockClickHandler).toHaveBeenCalled();
    });
});

describe('buttonClickHandler', () => {
    let alertFn;

    beforeEach(() => {
        alertFn = window.alert;
        window.alert = jest.fn().mockReset();
    });

    afterEach(() => {
        window.alert = alertFn;
    });

    it('alerts the user with a greeting', () => {
        buttonClickHandler();
        expect(window.alert).toHaveBeenCalledWith('In your face.');
    });
});
