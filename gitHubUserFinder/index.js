const userName = document.querySelector(".entered-field");
const userContainer = document.querySelector(".showUser");


function createInfo(data) {
  userContainer.style.display = "block";

  let userInfo = document.querySelector("#userInfo");

  userInfo.innerHTML = `<li><span>Name:</span> ${data.name}</li>`
}

class GitHub {

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

userName.addEventListener("keyup", () => {
  currentUser = user.getUser(event.target.value);
  if (currentUser) {
    currentUser.then((data) => {
      if (data.profile.message == "Not Found") {
        console.log(`User - ${searchText} Not Found`);
      } else {
        createInfo(data.profile);
      }
    });
  }
});
