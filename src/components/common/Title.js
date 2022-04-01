import React from 'react';

function Title({ title }) {
    return (<span className="p-5 text-3xl text-orange-500 ">{title}</span>);
}

export default React.memo(Title, (prev, next) => prev.title !== next.title );