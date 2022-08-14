import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = {};

export default HeaderOnly;
