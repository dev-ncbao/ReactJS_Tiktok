import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(
    {
        to,
        href,
        primary = false,
        outlined = false,
        rounded = false,
        text = false,
        iconLeft,
        iconRight,
        children,
        className,
        ...passingProps
    },
    ref,
) {
    let Comp = 'button';

    const props = {
        to,
        href,
        ...passingProps,
    };

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outlined,
        rounded,
        text,
    });

    if (to) {
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }

    return (
        <Comp ref={ref} className={classes} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}

export default forwardRef(Button);
