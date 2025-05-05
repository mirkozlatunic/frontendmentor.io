import { contentLarge, contentSmall } from "../constants/constants";

const renderedCardLarge = contentLarge.map((content) => {
  return (
    <div className="flex gap-x-7">
      <div
        className={`flex flex-col max-h-54 sm:w-64 w-80 px-16 pt-8 pb-6 bg-slate-100 rounded items-center ${content.border} border-t-4 dark:bg-blue-950/30 cursor-pointer hover:dark:bg-blue-900/50 hover:bg-slate-200`}
      >
        <div className="flex items-center mb-7">
          {content.icon}
          <p className="text-gray-500 text-xs">{content.user}</p>
        </div>
        <div className="flex flex-col items-center mb-6">
          <p className="font-extrabold text-5xl">{content.followers}</p>
          <p className="tracking-widest text-gray-500">FOLLOWERS</p>
        </div>
        <div className="flex items-center">
          {content.status}
          <p className={`${content.arrow}`}>{content.number}</p>
        </div>
      </div>
    </div>
  );
});

function CardLarge() {
  return (
    <div className="flex gap-7 sm:px-40 px-6 flex-wrap justify-center">
      {renderedCardLarge}
    </div>
  );
}

const renderedCardSmall = contentSmall.map((content) => {
  return (
    <div>
      <div className="rounded dark:bg-blue-950/30 bg-slate-100 cursor-pointer hover:dark:bg-blue-900/50 hover:bg-slate-200 p-6 sm:w-64 w-80">
        <div className="flex justify-between items-center pb-6">
          <div className="text-gray-500 text-sm">{content.text}</div>
          {content.icon}
        </div>
        <div className="flex justify-between items-center">
          <div className="font-extrabold text-2xl">{content.number}</div>

          <p className={`flex items-center ${content.arrow}`}>
            {content.status} {content.precent}
          </p>
        </div>
      </div>
    </div>
  );
});

function CardSmall() {
  return (
    <div className="flex gap-7 flex-wrap sm:px-40 px-6 justify-center pb-16">
      {renderedCardSmall}
    </div>
  );
}

export { CardLarge, CardSmall };
