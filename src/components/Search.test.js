// import {render, screen} from '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './Search';

it('allows me to type in', () => {
    render(<Search />)

    userEvent.type(screen.getByLabelText(/Search for food:/i), 'cheese')
})