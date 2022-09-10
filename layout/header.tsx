import ConnectionButton from "../components/ConnectionButton";

const Header = () => {
    return (
        <header>
      <div className="flex items-center justify-between p-6">
        <div className="text-2xl text-red-500">Auctioneer</div>
        <div>
            <ConnectionButton />
            {/* <button className="p-2 text-red-200 bg-red-600 border-0 rounded-md">Connect</button> */}
        </div>
      </div>
        </header>
    );
}

export default Header