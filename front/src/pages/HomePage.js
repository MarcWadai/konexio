import React from 'react';
import Layout from '../components/myLayout';
import ProfileCard from '../components/profileCard';
import '../styles/pages/HomePage.scss';
import { Link } from 'react-router-dom';

function HomePage() {
  const demoUsers = [
    {
      id: "1",
      firstname: "test1",
      lastname: "test2",
      picture: "https://picsum.photos/200",
      newsletter: false,
      email: "test@test.fr"
    },
    {
      id: "1",
      firstname: "marc",
      lastname: "siri",
      picture: "https://picsum.photos/200",
      newsletter: false,
      email: "test@test.fr",
      status: 'TEACHER'
    },
    {
      id: "3",
      firstname: "marina",
      lastname: "siri",
      picture: "https://picsum.photos/200",
      newsletter: true,
      email: "test@test.fr",
      status: 'TEACHER'
    },
    {
      id: "2",
      firstname: "anne",
      lastname: "siri",
      picture: "https://picsum.photos/200",
      newsletter: false,
      email: "test@test.fr",
      status: 'STUDENT'
    }
  ]
  return (
    <Layout>
      <div className="homePage">
        {
          demoUsers.map((one, index) => (
            <Link to={`/user/${one.id}`} className="cardItem" key={index}>
              <ProfileCard user={one} ></ProfileCard>
            </Link>
            )
          )
        }

      </div>
    </Layout>
  );
}

export default HomePage;
