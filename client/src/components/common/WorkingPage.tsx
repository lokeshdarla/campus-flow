import { IoIosWarning } from "react-icons/io";
export default function NotFound() {
  return (
    <div className="flex h-[75vh] flex-col w-full items-center justify-center">
      <div className="text-2xl max-w-xl text-center gap-5 text-gray-400 flex flex-col items-center justify-center">
        <IoIosWarning size={40} />
        <p>Hold on tight, we&apos;re working on this page.</p>
      </div>
    </div>
  )
}


