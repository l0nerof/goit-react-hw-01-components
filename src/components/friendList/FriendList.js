import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <ul className={css.FriendList} key={id}>
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
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
