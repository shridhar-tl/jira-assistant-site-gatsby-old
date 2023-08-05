import React from 'react';
import { Link as RouteLink } from 'gatsby';

function Link({ href, external, children, ...more }) {
    const isExternal = external || href?.startsWith('http');

    if (isExternal) {
        return (
            <a
                href={href}
                rel="noreferrer"
                target="_blank"
                {...more}
            >{children}</a>
        );
    } else {
        return (
            <RouteLink to={href} {...more}>{children}</RouteLink>
        );
    }
}

export default Link;