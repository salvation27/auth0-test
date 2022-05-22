import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user,isAuthenticated,isLoading } = useAuth0();

if (isLoading) {
    return (
        <h1>Загрузка</h1>  
    )
}
  return (
      isAuthenticated && (
          <div>
              <img src={user.picture} alt="" />
              <h2>{user.name}</h2>
              <h3>{user.email}</h3>
          </div>
      )
  );
};

export default UserProfile;
