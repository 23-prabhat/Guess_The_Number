import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const Start = () : void => {
    navigate("/game");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center text-white font-mono relative p-6">

      <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_#ff0] animate-bounce tracking-wide">
        GUESS-A-THON 🎮
      </h1>

      <p className="mt-6 text-lg md:text-2xl text-pink-400 drop-shadow-[0_0_10px_#ff00ff] max-w-2xl">
        Yo yo! ✌️ Welcome to the ultimate brain-melting number grind.  
        <br />
        Think you can beat the numbers? <span className="text-cyan-400 font-bold">Good luck, champ! 😜</span>
      </p>

      <button
        onClick={Start}
        className="mt-10 px-10 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-extrabold text-xl rounded-xl shadow-lg hover:scale-110 hover:shadow-[0_0_30px_#00ffea] transition-all duration-300 animate-pulse"
      >
        LET’S GO! 🚀
      </button>

      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-10 left-20 animate-bounce text-3xl">🎲</span>
        <span className="absolute top-32 right-24 animate-bounce text-4xl">🤪</span>
        <span className="absolute bottom-20 left-1/2 animate-bounce text-3xl">💥</span>
        <span className="absolute bottom-10 right-10 animate-bounce text-2xl">👾</span>
      </div>

    </div>
  );
}
