const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-purple-600">Travlog</div>
        <nav>
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Log In</button>
          <button className="bg-white border border-purple-500 text-purple-500 px-4 py-2 rounded ml-4">Sign Up</button>
        </nav>
      </header>
    );
  };
  
  export default Header;
  