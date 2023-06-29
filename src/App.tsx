function App() {
  return (
    <div className="min-w-screen max-w-screen min-h-screen max-h-screen bg-home-image bg-no-repeat bg-cover flex justify-center font-iceland">
      <div className="flex flex-col w-4/5 items-center justify-between h-4/5 self-center gap-16">
        <header className="flex items-center gap-10">
          <button className="text-[#A8A2A2] text-[26px] font-normal hover:text-white active:text-[#8E0000]">
            HOME
          </button>
          <button className="text-[#A8A2A2] text-[26px] font-normal hover:text-white active:text-[#8E0000]">
            EPISODES
          </button>
          <button className="text-[#A8A2A2] text-[26px] font-normal hover:text-white active:text-[#8E0000]">
            STORY
          </button>
          <button className="text-[#A8A2A2] text-[26px] font-normal hover:text-white active:text-[#8E0000]">
            GALLERY
          </button>
        </header>
        <div className="flex flex-col self-start gap-5">
          <h1 className="font-normal text-[92px] text-white -mb-8 p-0">
            THE LAST OF US
          </h1>
          <p className="text-[#A8A2A2] text-[26px] font-normal font-actor">
            When you are lost in the dark, look for the <br />
            light, believe in the fireflies
          </p>
          <div className="flex gap-6">
            <button className="text-white bg-[#474747] py-2 px-5 border-2 hover:bg-[#ffffff] hover:text-black active:bg-[#8E0000] active:hover:border[#474747] active:text-white rounded-tr-lg rounded-bl-lg">
              MORE INFO
            </button>
            <button className="text-white bg-[#474747] py-2 px-5 border-2 hover:bg-[#ffffff] hover:text-black active:bg-[#8E0000] active:hover:border[#474747] active:text-white rounded-tr-lg rounded-bl-lg">
              WATCH TEASER
            </button>
          </div>
        </div>
        <div className="flex flex-col self-start w-full gap-3">
          <h2 className="text-white text-[26px] font-normal">INSIDE</h2>
          <div className="w-full flex gap-7">
            <div className="w-60 h-32 bg-survival-image bg-no-repeat bg-cover text-[#B8B8B8] font-normal flex justify-center items-center border-2 border-[#2E2D2D] hover:border-white active:border-[#8E0000] cursor-pointer">
              SURVIVAL
            </div>
            <div className="w-60 h-32 bg-relationship-image bg-no-repeat bg-cover text-[#B8B8B8] font-normal flex justify-center items-center border-2 border-[#2E2D2D] hover:border-white active:border-[#8E0000] cursor-pointer">
              RELATIONSHIP
            </div>
            <div className="w-60 h-32 bg-adventure-image bg-no-repeat bg-cover text-[#B8B8B8] font-normal flex justify-center items-center border-2 border-[#2E2D2D] hover:border-white active:border-[#8E0000] cursor-pointer">
              ADVENTURE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
