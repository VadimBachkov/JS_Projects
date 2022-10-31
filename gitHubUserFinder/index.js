const userName = document.querySelector(".entered-field");
const userContainer = document.querySelector(".showUser");

async function showAvatar() {
  let githubResponse = await fetch(`https://api.github.com/users/${userName.value}`);
  let githubUser = await githubResponse.json();
  userContainer.style.display = "block";
  
  createInfo(githubUser);
  return githubUser;
}



function createInfo(githubUser) {
  userContainer.style.display = "block";

  let userPhoto = document.querySelector(".userPhoto");
  let userInfo = document.querySelector("#userInfo");

  userPhoto.innerHTML = `<img Photo: src=${githubUser.avatar_url}>`;
  userInfo.innerHTML = `
            <li>Name: ${githubUser.name}</li>
            <li>Bio: ${githubUser.bio}</li>
            <li>Location: ${githubUser.location}</li>
            <li>Company: ${githubUser.company}</li>
            <li>Followers: ${githubUser.followers}</li>
           `
};


userName.addEventListener("keyup", () => {
  if(userName.value == "") {
    userContainer.style.display="none";
  }else{
    showAvatar();
  }
})






