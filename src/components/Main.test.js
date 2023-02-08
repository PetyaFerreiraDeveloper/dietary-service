import React from 'react';
import {render, screen} from '@testing-library/react';

// import Home from '../pages/index';
// import Home from '@/pages';
import Main from './Main';

describe('Home page', () => {
    it('render app heading', () => {
        // render(<Home />);
        render(<Main />)

        screen.getByRole('heading', {name:/This is brand new app using the FDC API/i})
    })
})

