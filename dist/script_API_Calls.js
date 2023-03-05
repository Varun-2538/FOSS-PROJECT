const accessToken = "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";

async function updateUserData(username) {
  // Fetch user data using GitHub API
  const response = await fetch(`https://api.github.com/users/${username}?access_token=${accessToken}`);
  const userData = await response.json();

  // Fetch user's repository data
  const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?access_token=${accessToken}`);
  const repoData = await repoResponse.json();

  // Calculate total contributions
  let totalContributions = 0;
  repoData.forEach(repo => {
    totalContributions += repo.stargazers_count + repo.forks_count + repo.watchers_count;
  });

  // Calculate star rating and color
  let starRating = Math.floor(totalContributions / 30);
  let color = "";
  if (starRating < 1) {
    starRating = 1;
    color = "red";
  } else if (starRating > 5) {
    starRating = 5;
    color = "green";
  } else {
    color = "orange";
  }

  // Update HTML with user data
  document.getElementById("user-name").innerText = userData.name;
  document.getElementById("user-languages").innerText = userData.bio;
  document.getElementById("user-contributions").innerText = totalContributions;
  document.getElementById("star-rating").innerText = `${starRating} star`;
  document.getElementById("star-rating").style.color = color;
}

// Add event listener to search button
document.getElementById("search-btn").addEventListener("click", function() {
  const username = document.getElementById("search-box").value;
  updateUserData(username);
});
