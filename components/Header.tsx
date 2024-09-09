

function Header() {
  return <header>
    <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
    <div className="
    absolute
    top-0
    left-0
    w-full
    h-[105px]
    bg-gradient-to-br
    from-pink-400
    to-purple-500
    rounded-md
    filter
    blur-3xl
    -z-50"/>
    
    <img src= "./image/trello.png"
     alt="taskbuddy"
     width={100}
     height={100}
     className="object-contain"/>
    
     
    <div className="felx items-center space-x-10 flex-1 justify-end w-full">
      {/*Search button*/}
      <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
        <input 
        type="text" 
        placeholder="Search" 
        className="flex-1 outline-none p-1"
        
        />
        <button type="submit" hidden>Search</button>
      </form>
    </div>
    </div>
  </header>;
}

export default Header;