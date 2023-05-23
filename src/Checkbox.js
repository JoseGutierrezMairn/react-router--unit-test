import { useState } from "react";


export function Checkbox() {
    const [checked, toggle] = useState(false);

    return (
        <>
            <label htmlFor="checkbox">
                {checked ? 'checked' : 'not checked'}
            </label>
            <input id="checkbox" type="checkbox" value={checked} onChange={() => toggle(!checked)}></input>
        </>
    );
}