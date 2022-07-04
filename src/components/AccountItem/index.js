import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            {/* <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9366bed55819a1889d53ff3a508c766b~c5_300x300.webp?x-expires=1654182000&x-signature=JHEx5BdgtHZbB%2BJJoye55EF8kZY%3D"
                alt="hoaa.nassi"
            /> */}
            <div className={cx('info')}>
                <div className={cx('username')}>
                    <span>hoaa.nassi</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <span className={cx('name')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
