import axios from 'axios';

export const searchArtists = async (searchKey, token) => {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist,track,album",
      },
    });
    return response.data;
};

export const getNewReleases = async (token) => {
  try{
    const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        country: 'KR',
        limit: '10',
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }

};

//https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF --- global top 50
export const getTopTracks = async (token) => {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/playlists/37i9dQZEVXbNxXF4SkHj9F?utm_source=generator`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return response.data;
  } catch (error) {
    console.log(error);
  }

};


export const getInfoAbtMe = async (token) => {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });


  return response.data;
  } catch (error) {
    console.log(error);
  }

};

