const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3012a5789amshb1eff803550883fp1f5e41jsn50a3411ce678",
    "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
  },
};

// Fetches artists information from user input field
// NOTE: We need to use encodeURI with the input value
async function getSearchData() {
  let res = await fetch(
    `https://spotify81.p.rapidapi.com/search?q=robbie%20williams&type=artists&offset=0&limit=10&numberOfTopResults=5`,
    options
  );
  let data = await res.json();
  console.log(data);
  const artistInfo = data.artists.items;
  for (let i = 0; i < artistInfo.length; i++) {
    const artistName = artistInfo[i].data.profile;
    const artistImage = artistInfo[i].data.visuals.avatarImage.sources[0].url;
    const artistID = artistInfo[i].data.uri.split(":").pop();
  }
}
getSearchData();
// Fetches artist data once artist ID has been retrieved from getSearchData function
async function getArtistData(id) {
  let res = await fetch(
    `https://spotify81.p.rapidapi.com/artist_albums?id=${id}&offset=0&limit=100`,
    options
  );
  let data = await res.json();
  console.log(data);
}
// Fetch artist singles using artist id retrieved from getSearchData function
async function getArtistSingles(id) {
  let res = await fetch(
    `https://spotify81.p.rapidapi.com/artist_singles?id=${id}`,
    options
  );
  let data = await res.json();
  console.log(data);
}

// Fetch artist albums using artist id retrieved from getSearchData function
async function getArtistAlbums(id) {
  let res = await fetch(
    `https://spotify81.p.rapidapi.com/artist_albums?id=${id}&offset=0&limit=100`,
    options
  );
  let data = await res.json();
  console.log(data);
}

function searchResultsLoop(results) {
  for (let i = 0; i < results.length; i++) {
    console.log(results[i].data);
  }
}

function displaySearchResults() {}
