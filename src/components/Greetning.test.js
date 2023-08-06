import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders Hello World as a text', ()=> {
        //Arrange
        render(<Greeting />);
    
        //Act
        // ... nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button was NoNO clicked', () => {
        render(<Greeting />);

        const noChangeElement = screen.getByText("good to see you!",{exact: false});
        expect(noChangeElement).toBeInTheDocument();
    });

    test('renders changed! if the button was clicked' ,()=> {
        //Arrange
        render(<Greeting />);

        //ACT
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const ChangeElement = screen.getByText("Changed!",{exact: false});
        expect(ChangeElement).toBeInTheDocument();
    });

    test('does not renders good to see need disappear when click', () => {
        render(<Greeting />);

        //ACT
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const disappearElement = screen.queryByText("good to see you", {exact: false});
        expect(disappearElement).toBeNull();
    })
});

