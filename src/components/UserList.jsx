import { List } from './UserList.style'
import { UserItem } from './UserItem';

const UserList = ({ users }) => {
    return (
        <List>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </List>
    );
};

export default UserList;