import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white duration-100">
          <HomeIcon className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white duration-100">
          <SearchIcon className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white duration-100">
          <LibraryIcon className="w-5 h-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white duration-100">
          <PlusCircleIcon className="w-5 h-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white duration-100">
          <HeartIcon className="w-5 h-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white duration-100">
          <RssIcon className="w-5 h-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlist dummy */}
        <p className="cursor-pointer hover:text-white duration-100">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-white duration-100">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-white duration-100">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-white duration-100">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-white duration-100">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-white duration-100">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-white duration-100">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-white duration-100">
          Playlist name...
        </p>
      </div>
    </div>
  );
}
