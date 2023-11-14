import React from 'react';

export default function Folder({ name, size, added, files }) {
    return (
        <div>{name} - {size}kB - {added}</div>
    );
}
