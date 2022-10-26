const userName = document.querySelector(".entered-field");
const userSection = document.querySelector(".showUser");

function changeInfo(data) {
    userSection.style.display = "block";
  
    let userInfo = document.querySelector("#userInfo");
  
    userInfo.innerHTML = `<li><span>Name:</span> ${data.name}</li>`
    // <li><span>Bio:</span> ${data.bio}</li>
    // <li><span>Location:</span> ${data.location}</li>
    // <li><span>Company:</span> ${data.company}</li>`;
  
    // img.innerHTML = `<img src="${data.avatar_url}">`;
  }

class GitHub {
    // constructor() {

    // }
  
    async getUser(user) {
      const profileResponse = await fetch(
        `https://api.github.com/users/${user}`
      );
      const profileData = await profileResponse.json();
      return {
        profile: profileData,
      };
    }
  }
  
  let user = new GitHub();
  
  userName.addEventListener("keyup", (event) => {
    currentUser = user.getUser(event.target.value);
    if (currentUser) {
      currentUser.then((data) => {
        if (data.profile.message == "Not Found") {
          console.log(`User - ${searchText} Not Found`);
        } else {
          changeInfo(data.profile);
        }
      });
    } else {
      clearProfile();
    }
  });

  function clearProfile() {
    userSection.style.display = "none";
  }