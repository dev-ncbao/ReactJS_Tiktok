import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ items, children }) {
    const menuItems = () => {
        return items.map((item, index) => {
            <Button text key={index}>
                {item.title}
            </Button>;
        });
    };

    return (
        <Tippy
            visible
            interactive
            placement="bottom"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{menuItems}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
