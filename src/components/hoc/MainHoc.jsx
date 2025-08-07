
import hocWithLoader from './hocWithLoader';
import UserList from './UserList';

// HOC in action: create a new component with loading behavior
const UserListWithLoading = hocWithLoader(UserList);

const MainHoc = () => {
      const users = [
    { id: 1, name: 'Mustaq' },
    { id: 2, name: 'Ali' },
  ];
  
  const isLoading = true;
return <UserListWithLoading users={users} isLoading={isLoading} />;
}

export default MainHoc
