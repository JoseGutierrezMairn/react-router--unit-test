import {render} from '@testing-library/react';
import App from './App';

test("Renders an h1 from App component", () => {
    const h1 = render(<App />).getByText('Hello React Testing Library');
    // const h1 = renderRes.getByText('Hello Testing Library');
    expect(h1).toHaveTextContent('Hello React Testing Library');
})