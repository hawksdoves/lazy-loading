import React from 'react';
import Pallet from './Pallet';

export default function Wrapper({ type, children, addBlock }) {
    return (
    <section className={`wrapper wrapper_${type}`}>
        {children}
        <Pallet addBlock={addBlock} />
    </section>
    )
}
