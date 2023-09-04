import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const homeBreadcrumb = { name: 'Home', routeTo: '/' };
    const pathBreadcrumbs = pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? { name } : { name, routeTo };
    });

    const breadcrumbs = [homeBreadcrumb, ...pathBreadcrumbs];

    const liStyle = { display: 'inline', marginRight: '5px' };
    const liStyleLast = { display: 'inline', marginRight: '5px', textDecoration: 'underline', cursor: 'default  ' };
    const linkStyle = { textDecoration: 'none' };

    return (
        <nav aria-label="breadcrumb">
            <ol>
                {breadcrumbs.map(({ name, routeTo }, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return isLast ? (
                        <li key={name} style={liStyleLast}>{name}</li>
                    ) : (
                        <li key={name} style={liStyle}>
                            <Link to={routeTo} style={linkStyle}>{name}</Link> {'/'}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb;