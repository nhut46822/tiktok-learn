import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
// import styles from './Button.module.scss';
import Button from '~/components/Button';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {};

export default MenuItem;
