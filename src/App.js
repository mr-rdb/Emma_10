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
        <div className="flex justify-center h-52">
          <div class="w-16 self-center h-16 border-4 border-dashed rounded-full animate-spin border-app-blue"></div>
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
