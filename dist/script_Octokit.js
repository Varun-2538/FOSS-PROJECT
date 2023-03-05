// const { Octokit } = require("@octokit/core");
// const { createTokenAuth } = require("@octokit/auth-token");

// const accessToken = "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";

// const auth = createTokenAuth(accessToken);
// const octokit = new Octokit({ auth });

// async function updateUserData() {
//   const username = document.getElementById("username-input").value;

//   // Fetch user data using Octokit
//   const userData = await octokit.rest.users.getByUsername({ username: username });

//   // Fetch user's repository data
//   const repoData = await octokit.rest.repos.listForUser({ username: username });

//   // Calculate total contributions
//   let totalContributions = 0;
//   repoData.data.forEach(repo => {
//     totalContributions += repo.stargazers_count + repo.forks_count + repo.watchers_count;
//   });

//   // Calculate star rating and color
//   let starRating = Math.floor(totalContributions / 30);
//   let color = "";
//   if (starRating < 1) {
//     starRating = 1;
//     color = "red";
//   } else if (starRating > 5) {
//     starRating = 5;
//     color = "green";
//   } else {
//     color = "orange";
//   }

//   // Update HTML with user data
//   document.getElementById("user-name").innerText = userData.data.name;
//   document.getElementById("user-languages").innerText = userData.data.bio;
//   document.getElementById("user-contributions").innerText = totalContributions;
//   document.getElementById("star-rating").innerText = `${starRating} star`;
//   document.getElementById("star-rating").style.color = color;
// }

// // Add event listener to search button
// document.getElementById("search-btn").addEventListener("click", updateUserData);
