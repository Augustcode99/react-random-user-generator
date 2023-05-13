import React, { useEffect, useState } from "react";

const User = () => {
  console.log("render");
  const [user, setUser] = useState(null);

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("Mount");
    getUser();
  }, []);

  console.log(user?.name?.last);

  return (
    <div>
      <h1>
        {user?.name?.title} {user?.name?.first} {user?.name?.last}
      </h1>
      <img src={user?.picture?.large} alt="" />
      <h4>{user?.email}</h4>
      <h5>Phone No: {user?.phone}</h5>
      <p>Date of Birth: {user?.dob?.date}</p>
      <button onClick={getUser}>Get another user</button>
    </div>
  );
};

export default User;
