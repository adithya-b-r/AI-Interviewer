'use client'

import { Console } from 'console';
import { detectBrowser } from './utility/detectBrowser';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Home() {
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  const checkBrowser = async () => {
    const browser = await detectBrowser();

    if (browser == "Chrome" || browser == "Edge") {
      console.log("You are using: " + browser);
    } else {
      alert("Speech-to-text is not supported in " + browser + ". Please use Chrome or Edge.");
    }
  }

  checkBrowser();

  return (
    <div className="w-full h-screen bg-gray-900 font-sans flex flex-col items-center">
      <h1 className="text-white text-4xl font-bold text-center py-4 tracking-wider">AI Interviewer</h1>

      <div className="bg-transparent border-2 border-gray-500 rounded-3xl w-[80%] h-[20vh] m-auto flex items-center justify-around">
        <button
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
          className="bg-slate-600 rounded-2xl font-semibold tracking-wide text-white py-3 w-fit h-fit px-6 border-2 border-gray-400 cursor-pointer"
        >
          Start Listen
        </button>
        <button
          onClick={SpeechRecognition.stopListening}
          className="bg-slate-600 rounded-2xl font-semibold tracking-wide text-white py-3 w-fit h-fit px-6 border-2 border-gray-400 cursor-pointer"
        >
          Stop Listen
        </button>
        <button
          onClick={resetTranscript}
          className="bg-slate-600 rounded-2xl font-semibold tracking-wide text-white py-3 w-fit h-fit px-6 border-2 border-gray-400 cursor-pointer"
        >
          Reset Listen
        </button>
      </div>

      <p className="text-white">Microphone: {listening ? 'on' : 'off'}</p>
      <p className="text-white mt-4 px-6 text-center">{transcript} meow</p>
    </div>
  );
}
