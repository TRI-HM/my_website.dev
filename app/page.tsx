// import Timeline from "./components/timeline/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-600">
      {/* <Navbar /> */}
      <h1 className="text-4xl uppercase text-green-500 m-10">
        {" "}
        welcome to huynhminhtri.dev
      </h1>
      <p className="text-2xl">This is my personal website</p>
      <div className="flex flex-col items-center justify-center my-10">
        <h1 className="text-2xl">List game</h1>
        <div>
          <a href="/number-guessing">
            <button className="bg-white text-gray-700 font-bold px-5 p-2 rounded-lg mt-4 hover:bg-red-500 hover:shadow-lg">
              Đoán số
            </button>
          </a>
        </div>
      </div>

      {/* <ModelLiveShow /> */}
      {/* <TypingEffect /> */}
      {/* <CharacterEmergingFromImage /> */}
      {/* <Timeline /> */}
    </div>
  );
}
