import { MdOutlineFileDownload } from "react-icons/md";

export default function DownloadBox({ platform, variant }) {
  return (
    <div className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-xl p-4 shadow-md hover:border-purple-800/60 transition-shadow duration-300">
      <div className="flex flex-col gap-2">
        <h1 className="inter text-white text-xl">{platform}</h1>
        <p className="inter text-sm text-zinc-400">{variant}</p>
      </div>
      <div>
        <MdOutlineFileDownload className="text-2xl text-white ml-auto" />
      </div>
    </div>
  );
}
