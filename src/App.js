import dayjs from "dayjs";
import { useState } from "react";

import "./App.css";
import TenAward from "./assets/10Award.png";
import LiefAward from "./assets/LiefAward.png";
import rings from "./assets/rings.png";
import temp from "./assets/temp.jpg";
import IosCard from "./components/Card";
import Modal from "./components/Modal";

function App() {
  const [modelType, setModalType] = useState();

  const hintsMap = [
    {
      date: dayjs("2024-11-05T16:00:00"), // Start date
      hint: "We’re two-gether in this, but can you guess what’s *pair-ed* up next?",
    },
    {
      date: dayjs("2024-11-06T16:00:00"), // Next day
      hint: "I’ve got a *creation* with you in mind—something that celebrates the beauty of two.",
    },
    {
      date: dayjs("2024-11-07T16:00:00"), // Another day
      hint: "What’s the only thing better than us? A night *designed* just for two!",
    },
    {
      date: dayjs("2024-11-08T16:00:00"), // Final hint
      hint: "You’ll want to bring your favorite snack.",
    },
  ];

  const getCurrentHint = () => {
    const now = dayjs();
    const currentHint = hintsMap.find((hintEntry) =>
      now.isBefore(hintEntry.date)
    );

    if (currentHint) {
      return currentHint.hint;
    } else {
      return "The surprise has been revealed!";
    }
  };

  return (
    <div className="bg-[#000000] grid grid-cols-2 p-4 pb-20 gap-3 h-full">
      <div className="flex col-span-2 h-16 justify-between align-middle items-centers content-center text-center pt-2">
        <h2 className="text-app-white font-light self-center flex-0.5 text-3xl font-sacramento">
          My Liewe Emma,
        </h2>
        <img src={rings} className="h-12 flex-0.5" alt="fitness rings" />
      </div>
      <IosCard title="Awards" span={2}>
        <div className="flex justify-around content-center h-52">
          <button
            onClick={() => setModalType("lief")}
            className="p-4 flex flex-col justify-center items-center content-center"
          >
            <img src={LiefAward} alt="temp" className="w-32 self-center" />
            <p className="text-app-white text-xs">Lief Vir Jou</p>
          </button>{" "}
          <button
            onClick={() => setModalType("")}
            className="p-4 flex flex-col justify-center items-center"
          >
            <img src={TenAward} alt="temp" className="w-32 self-center" />
            <p className="text-app-white text-xs">10 Maande</p>
          </button>
        </div>
      </IosCard>
      <IosCard title="Hint">
        <div className="flex justify-center content-center h-52 p-6 text-app-white text-center">
          <p className="self-center">{getCurrentHint()}</p>
        </div>
      </IosCard>

      <IosCard title="Verrassing">
        <div className="flex justify-center h-52">
          <img
            src={temp}
            alt="temp"
            className="w-24 self-center"
            style={{ filter: "blur(12px)" }}
          />
        </div>
      </IosCard>
      <Modal
        opened={modelType === "lief"}
        close={() => setModalType()}
        type={modelType}
      />
      <Modal
        opened={modelType === ""}
        close={() => setModalType()}
        type={modelType}
      />
    </div>
  );
}

export default App;
