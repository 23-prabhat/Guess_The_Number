import { useState } from "react";
import { useNavigate } from "react-router-dom";

     const [targetNumber, setTargetNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);
     console.log(targetNumber);

export default function Game() {

  const [guessNum, setNum] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const checkLuck = () : void => {
    const guess = Number(guessNum);

    if (isNaN(guess)) {
      setMessage("⚠️ Enter a valid number!");
      return;
    }

    if (guess < 1 || guess > 100) {
      setMessage("⚠️ Number must be between 1 and 100!");
      return;
    }

    if (guess === targetNumber) {
      setMessage("🎉 You Win! Epic skills!");
    } else if (guess < targetNumber) {
      setMessage("⬆️ Too low… Try again, warrior!");
    } else {
      setMessage("⬇️ Too high… You can do it!");
    }
  };

  const playAgain = () : void => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setNum("");
    setMessage("");
    console.log("New target:", targetNumber);
  };

 
  const handleGiveUp = () : void => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col items-center justify-center text-center text-white p-6 relative overflow-hidden">

      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00fff7] via-[#ff00ff] to-[#ffea00] animate-pulse tracking-wider drop-shadow-[0_0_20px_#ff00ff] mb-12">
        READY TO GUESS 🎮
      </h1>

      <button
        onClick={handleGiveUp}
        className="mb-6 px-6 py-2 text-black font-bold bg-gradient-to-r from-red-500 to-yellow-400 rounded-lg shadow-lg hover:scale-110 hover:shadow-[0_0_30px_#ff0000] transition-all duration-300"
      >
        GIVE UP 😵
      </button>

      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <input
          type="text"
          placeholder="Enter your number..."
          value={guessNum}
          onChange={(e) => setNum(e.target.value)}
          disabled={message === "🎉 You Win! Epic skills!"} // disable input on win
          className={`border rounded-lg px-4 py-2 text-white font-bold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff00ff] focus:ring-offset-2 bg-[#1b1b2f] transition duration-300 shadow-[0_0_10px_#00fff7] ${
            message === "🎉 You Win! Epic skills!" ? "opacity-50 cursor-not-allowed" : "border-[#00fff7]"
          }`}
        />
        <button
          onClick={checkLuck}
          disabled={message === "🎉 You Win! Epic skills!"} // disable check on win
          className={`px-6 py-3 bg-gradient-to-r from-[#ff00ff] to-[#00fff7] text-black font-extrabold rounded-lg shadow-[0_0_20px_#ff00ff] hover:scale-110 hover:shadow-[0_0_40px_#00fff7] transition-all duration-300 ${
            message === "🎉 You Win! Epic skills!" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          CHECK 🔥
        </button>
      </div>

      {message && (
        <p className="mt-10 text-[#ff00ff] drop-shadow-[0_0_15px_#ff00ff] font-mono animate-pulse text-xl md:text-2xl">
          {message}
        </p>
      )}

      {message === "🎉 You Win! Epic skills!" && (
        <button
          onClick={playAgain}
          className="mt-6 px-8 py-3 text-black font-extrabold bg-gradient-to-r from-green-400 to-blue-400 rounded-lg shadow-lg hover:scale-110 hover:shadow-[0_0_30px_#00ffea] transition-all duration-300 animate-pulse"
        >
          PLAY AGAIN 🚀
        </button>
      )}

      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-10 left-20 animate-bounce text-3xl">🎲</span>
        <span className="absolute top-32 right-24 animate-bounce text-4xl">💥</span>
        <span className="absolute bottom-20 left-1/2 animate-bounce text-3xl">⚡</span>
        <span className="absolute bottom-10 right-10 animate-bounce text-2xl">👾</span>
      </div>
    </div>
  );
}
