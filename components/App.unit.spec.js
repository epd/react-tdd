import React from 'react';
import {act} from 'react-dom/test-utils';
import {mount, shallow} from 'enzyme';

import App from './App';
import Button from './Button';
import List from './List';

import {getOfficesList} from '../api';

jest.mock('../api');

describe('App', () => {
    beforeEach(() => {
        getOfficesList
            .mockReset()
            .mockImplementation(() => Promise.resolve([]));
    });

    it('renders a button by default', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find(Button).exists()).toBe(true);
        expect(wrapper.find(Button).dive().text()).toBe('Load Offices'); // prettier-ignore
    });

    it('loads list of offices on click of the button', () => {
        const wrapper = shallow(<App />);

        wrapper.find(Button).simulate('click');

        expect(getOfficesList).toHaveBeenCalled();
    });

    it('shows the list of offices after loading', async () => {
        const mockResponse = Promise.resolve([
            'Villena',
            'Madrid',
            'San Francisco',
            'Vancouver',
            'Nashville',
        ]);
        getOfficesList.mockImplementation(() => mockResponse);

        const wrapper = mount(<App />);

        expect(wrapper.find(List).exists()).toBe(false);

        await act(() => {
            wrapper.find(Button).simulate('click');
            return mockResponse;
        });

        wrapper.update();

        expect(wrapper.find(List).exists()).toBe(true);
        expect(wrapper.find(List)).toMatchSnapshot();
    });
});
