import { useState, useEffect } from 'react';
import data from './data/data';
import quote from './assets/images/bg-pattern-quotation.svg';

function Cards() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
      {data.map((data, index) => {
        const textColor = data.backgroundColor !== 'bg-white' && 'text-white';
        const showQuote = !isMobile && index === 0;
        return (
          <div
            key={data.id}
            className={`shadow-3xl rounded-lg p-8 ${data.backgroundColor} ${textColor} ${data.mdGrid} ${data.lgGrid}`}
          >
            <div className="flex items-center pb-4 gap-4">
              <img
                src={data.pic}
                alt={data.name}
                className={`rounded-full size-7 ${data.borderPic}`}
              />
              {showQuote && (
                <img
                  src={quote}
                  alt="quote"
                  className="absolute right-60 z-1 lg:right-200"
                />
              )}
              <div>
                <p className="text-[13px]">{data.name}</p>
                <p className="text-[11px]">{data.title}</p>
              </div>
            </div>
            <div>
              <p className="pb-4 text-[20px] font-semibold z-10 relative">
                {data.review}
              </p>
              <p className="text-[13px]">{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
