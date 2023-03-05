let repoName = [
  "Mozilla/send",
  "Mozilla/sops",
  "Mozilla/glean",
  "Brave/brave-browser",
  "Brave/brave-core",
  "Brave/brave-ios",
  "Brave/brave-ui",
  "Brave/adblock-rust",
  "Adobe/spectrum-web-components",
  "Adobe/helix-website",
  "Adobe/hyde",
  "Adobe/ferrum",
];

let arr = [];
async function fetchData(repo) {
  const token =
    "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";

  const response = await fetch(
    `https://api.github.com/repos/${repo}/contributors`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  let data = await response.json();
  data = data.map((obj) => new Map(Object.entries(obj)));

  arr.push(data);
}

for (var i = 0; i < repoName.length; i++) {
  fetchData(repoName[i]);
}

console.log("Pra", arr);

let input = document.getElementById("search-box");

input.addEventListener("keyup", (e) => {
  removeElements();
  for (let i of sortedNames) {
    if (
      i.toLowerCase().startsWith(input.ariaValueMax.toLowerCase()) &&
      input.value != ""
    ) {
      let listItem = document.createdElement("li");

      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");

      let word = "<b>" + i.substr(0, input.value.length) + "</b>";

      word += i.substr(input.value.length);
      console.log(word);

      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }

  function displayNames(value) {
    input.value = value;
    removeElements();
  }

  function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }
});

function createCompanyArray() {
  let arr = [];
  arr.push("Mozilla", "Brave", "Adobe");
  return arr;
}

function createRepoListMap() {
  let map1 = new Map();
  Map.set("Mozille", ["send", "sops", "glean"]);
  Map.set("Brave", ["brave-browser", "brave-core", "brave-ios", "brave-ui"]);
  Map.set("Adobe", [
    "spectrum-web-components",
    "helix-website",
    "hyde",
    "ferrum",
  ]);
  return map1;
}

function createTopContributorMap(arr) {
  let map1 = new Map();
}
