import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <ul className={css.FriendList} key={id}>
      <li className={css.item}>
        <span className={isOnline ? css.statusTrue : css.statusFalse}>
          {isOnline}
        </span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </ul>
  ));
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;
