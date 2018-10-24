import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name='anyone' />);
    expect(hello.find('.greeting').text()).toEqual('Hello, anyone')
})

it('Count of rerendering', () => {
    const hello = enzyme.shallow(<Hello name='anyone' />);
    expect(hello.find('.renderCount').text()).toEqual('Количество отрисовок 1')
})