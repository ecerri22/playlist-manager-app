const ArtistCard = ({ imgSrc, title, artist, className, onClick }) => {
    return (
        <div className={`flex flex-col inline items-center hover:cursor-pointer py-4 ${className}`} onClick={onClick}>
        <img src={imgSrc} alt="user-pfp" className="aspect-square w-24 h-24 rounded-sm"></img>
        <p className="text-sm py-2 text-center text-gray-600 font-semibold dark:text-white ">{title}</p>
        <p className="text-xs text-gray-400 text-center dark:text-gray-300 ">{artist}</p>
    </div>
    );
  };

export default ArtistCard;