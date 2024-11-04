import React from "react";

function Modal({ opened, close, type }) {
  return (
    opened && (
      <div
        className="bg-app-grey h-72 p-4 rounded-xl shadow-lg flex flex-col justify-between align-middle content-center items-center"
        style={{
          position: "absolute",
          left: " 50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <button
          onClick={close}
          type="button"
          class="text-app-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="static-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <model-viewer
          src={type === "lief" ? "EmmaAward.glb" : "10Maande.glb"}
          camera-controls
          poster="poster.webp"
          shadow-intensity="2"
        ></model-viewer>
        <div className="h-4" />
        <p className="text-app-white text-xs">Op 10 Maande - 5 November 2024</p>
      </div>
    )
  );
}

export default Modal;
