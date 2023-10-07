import { PencilIcon } from "@heroicons/react/24/solid";

const NoEntries = () => (
  <div className="font-montserrat mx-auto flex w-3/4 flex-row items-center justify-center gap-8 rounded-sm border border-gray-400 bg-slate-800/30 p-10 text-lg text-gray-50 md:w-1/2">
    <PencilIcon width={40} />
    <p>You don&apos;t have any entries</p>
  </div>
);

export default NoEntries;
