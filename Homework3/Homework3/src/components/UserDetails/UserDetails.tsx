import  { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';

const UserDetails = () => {
  const { theme } = useContext(ThemeContext);

  const user = {
    fullName: 'John Doe',
    age: 30,
    profession: 'Software Developer',
    from: 'New York'
  };

  const styles = {
    backgroundColor: theme === 'dark' ? 'black' : 'gray',
    color: theme === 'dark' ? 'white' : 'blue',
    padding: '20px',
    borderRadius: '5px'
  };

  return (
    <div style={styles}>
      <h1>{user.fullName}</h1>
      <p>Age: {user.age}</p>
      <p>Profession: {user.profession}</p>
      <p>From: {user.from}</p>
    </div>
  );
};

export default UserDetails;