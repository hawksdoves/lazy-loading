import React from 'react';

export default function Pallet({ addBlock }) {
    return (
    <nav >
        <button onClick={() => addBlock('image')}>image</button>
        <button onClick={() => addBlock('tweet')}>tweet</button>
    </nav>
    )
}
