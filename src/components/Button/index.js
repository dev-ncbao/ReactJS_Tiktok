import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary = false, outline = false, text = false, iconLeft, iconRight, children }) {
    let Comp = 'button';

    const props = {
        to,
        href,
        primary,
        outline,
        text,
    };

    const classes = {
        primary,
        outline,
        text,
    };

    if (to) {
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }

    return (
        <Comp className={cx('wrapper', { ...classes })} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}

export default Button;
