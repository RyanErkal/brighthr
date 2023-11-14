import React from 'react';

export default function File({ name, size, added }) {
    return (
        <div>{name} - {size}kB - {added}</div>
    );
}
