import axios from "axios";
const getData = (userID, postID) => {
  const usersPosts = new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + userID
    );

    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + postID
    );
    resolve(user, post);
    console.log("USER:", user);
    console.log("POST:", post);
  });

  return usersPosts;
};

// getData(1, 2).then((data) => {
//   console.log(data);
// });

export default getData;
