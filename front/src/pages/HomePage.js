import React, { useEffect, useState } from 'react';
import Layout from '../components/myLayout';
import ProfileCard from '../components/profileCard';
import '../styles/pages/HomePage.scss';
import { Link } from 'react-router-dom';
import { withUser } from '../store/UserProvider';
import { getUsers } from '../services/network';


function HomePage(props) {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    getUsers().then(res => {
      setUsers(res.map(o => {
        if (props.currentUser && props.currentUser.id === o.id ) {
          o.isCurrent = true
          return o;
        }
        return o;
      }))
    }).catch(err => setError(err))
  }, [props.currentUser])

  return (
    <Layout error={error}>
      <div className="homePage">
        {
          users.map((one, index) => (
            <Link 
             to={`/user/${one.id}`}
             className="cardItem"
             key={index}>
               <span>{one.isCurrent}</span>
              <ProfileCard user={one} ></ProfileCard>
            </Link>)
          )
        }
      </div>
    </Layout>
  );
}

export default withUser(HomePage);
