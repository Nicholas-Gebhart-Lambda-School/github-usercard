/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const followersArray = [];
axios
  .get("https://api.github.com/users/gebhartn/followers")
  .then(res => {
    console.log(res.data);
    res.data.forEach(x => followersArray.push(x.login));
    followersArray.forEach(username => {
      axios.get(`https://api.github.com/users/${username}`).then(res => {
        const newCard = createCard(res.data);
        entryPoint.appendChild(newCard);
      });
    });
  })
  .catch(error => {
    console.log("something is wrong", error);
  });

// const followersArray = ["gebhartn"];
// followersArray.forEach(username => {
//   console.log("hello");
//   axios
//     .get(`https://api.github.com/users/${username}`)
//     .then(response => {
//       console.log(response);
//       const newCard = createCard(response.data);
//       entryPoint.appendChild(newCard);
//     })
//     .catch(error => {
//       console.log("something is wrong", error);
//     });
// });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const entryPoint = document.querySelector(".cards");

function createCard(obj) {
  const div = document.createElement("div"),
    img = document.createElement("img"),
    card = document.createElement("div"),
    h3 = document.createElement("h3"),
    user = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    a = document.createElement("a"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");

  div.classList.add("card");
  card.classList.add("card-info");
  h3.classList.add("name");
  user.classList.add("username");

  div.appendChild(img);
  div.appendChild(card);
  card.appendChild(h3);
  card.appendChild(user);
  card.appendChild(location);
  card.appendChild(profile);
  profile.style.display = "inline";
  profile.style.fontSize = "1.4rem";
  profile.style.marginBottom = "3px";
  card.appendChild(a);
  card.appendChild(followers);
  card.appendChild(following);
  card.appendChild(bio);

  img.src = obj.avatar_url;
  h3.textContent = obj.name;
  user.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  a.href = obj.html_url;
  profile.textContent = "Profile:";
  a.textContent = obj.html_url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;

  return div;
}

// console.log(createCard());
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
