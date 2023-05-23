import { Checkbox } from "./Checkbox"
import {render, fireEvent} from '@testing-library/react'


test('Selecting checkbox', () => {
    const checkbox = render(<Checkbox></Checkbox>).getByLabelText('not checked');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    console.log(checkbox);
    
})