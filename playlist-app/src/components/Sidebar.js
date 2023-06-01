import { BsMusicNoteBeamed, BsFillVolumeUpFill } from "react-icons/bs";
import { FaMicrophone, FaHeart } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { RiAlbumFill } from  "react-icons/ri";
import { IoAlbumsSharp } from "react-icons/io5";

function Sidebar() {

  const MenuOptions = [
    { label: 'Explore', icon: <BsMusicNoteBeamed /> },
    { label: 'Genres', icon: <BsFillVolumeUpFill /> },
    { label: 'Artists', icon: <FaMicrophone /> },
    { label: 'Charts', icon: <RiAlbumFill /> }
  ];
  
  const LibraryOptions = [
    { label: 'Favourites', icon: <FaHeart/> },
    { label: 'Albums', icon: <IoAlbumsSharp/> }
  ]

  const PlaylistOptions = [
    { label: 'Create', icon: <AiFillPlusSquare/> }
  ]

  const renderMenuOptions = (options) => {
    return (
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <a className="flex flex-row items-center text-gray-500 my-4 p-0.5 hover:text-indigo-600 active:text-indigo-600 focus:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600" href="#">
              <div className="m-1 mr-4">{option.icon}</div>
              <p className="text-sm tracking-wide ">{option.label}</p>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const MenuSections = [
    { label: 'Menu', options: renderMenuOptions(MenuOptions)},
    { label: 'Library', options: renderMenuOptions(LibraryOptions)},
    { label: 'Playlist', options: renderMenuOptions(PlaylistOptions)}
  ];

  const renderMenuSections = MenuSections.map((section) => {
  return (
      <div className="py-4 px-8" key={section.label}>
          <div className="flex flex-col justify-start">
              <p className="uppercase text-sm tracking-widest ml-1 text-gray-500 font-semibold">{section.label}</p>
              {section.options}
          </div>
      </div>
  );
  });

  return(
    <div className="bg-gray-200 basis-2/12 h-full dark:bg-neutral-800">
        <div className="flex flex-col ">
            <p className="text-2xl self-center py-8 text-neutral-700 font-bold dark:text-gray-300">
                MUSICLY
            </p>
            {renderMenuSections}
        </div>
    </div>
   
  )
}

export default Sidebar;
