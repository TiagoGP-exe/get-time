import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const date = new Date();
  const getTime = date.getTime();
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-[#242428]">
      <h1 className="dark:text-white font-bold text-3xl mb-5">GETTIME()</h1>
      <main className="flex items-center gap-4 rounded-lg border-2 pl-3 border-black/20">
        <p className="dark:text-white">{getTime}</p>
        <CopyToClipboard
          onCopy={() => setIsCopied(true)}
          text={getTime.toString()}
        >
          <button
            className={`${
              !isCopied
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 dark:hover:bg-green-500"
            } py-[0.5rem] px-6 text-white font-semibold rounded-tr-md rounded-br-md active:scale-90 transition-all duration-300 ease-in-out
            `}
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </main>
    </div>
  );
}

export default App;
