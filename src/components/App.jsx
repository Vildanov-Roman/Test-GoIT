import UserList from './UserList'
import users from '../json/users.json';

export const App = () => {
  return (
    <div>
     <UserList users={users}/>
    </div>
  );
};
