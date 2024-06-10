function Login() {
  const CLIENT_ID = 'd4b2717adaa74dd2924092d5b8f68955';
  const REDIRECT_URI = 'https://playlist-manager-app.netlify.app/';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

    return (
      <div className="grid h-screen place-items-center bg-black">
        <img
          src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
          className="w-auto h-80"
          alt="Spotify logo"/>

        <button className="bg-lime-500 px-4 py-2 rounded-full">
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`}>
            <p className="text-white text-lg">Login with Spotify</p>
          </a>
        </button>
        
      </div>
    );
  }
  
export default Login;