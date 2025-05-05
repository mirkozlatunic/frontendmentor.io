import supervisorIcon from './assets/images/icon-supervisor.svg';
import teamBuilderIcon from './assets/images/icon-team-builder.svg';
import karmaIcon from './assets/images/icon-karma.svg';
import calculatorIcon from './assets/images/icon-calculator.svg';

const data = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    image: supervisorIcon,
    border: 'border-t-4 border-[#44d3d2]',
    mdGrid: 'md:col-span-2',
    lgGrid: 'lg:col-start-1 lg:col-span-1 lg:row-span-2 lg:my-auto',
  },
  {
    title: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    image: teamBuilderIcon,
    border: 'border-t-4 border-[#ea5454]',
    mdGrid: 'md:col-start-1',
    lgGrid: 'lg:col-start-2 lg:row-start-1',
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    image: karmaIcon,
    border: 'border-t-4 border-[#fcae4a]',
    mdGrid: 'md:col-start-2',
    lgGrid: 'lg:col-start-2 lg:row-start-2',
  },
  {
    title: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    image: calculatorIcon,
    border: 'border-t-4 border-[#549ef2]',
    mdGrid: 'md:col-span-2',
    lgGrid: 'lg:col-start-3 lg:col-span-1 lg:row-span-2 lg:my-auto',
  },
];

function Card() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
      {data.map((data, index) => {
        return (
          <div
            key={index}
            className={`shadow-lg rounded-lg p-8 pb-10 max-w-[350px] mx-auto ${data.border} ${data.mdGrid} ${data.lgGrid}`}
          >
            <div className="pb-8">
              <h1 className="text-xl font-semibold text-[#4d4f62] leading-8">
                {data.title}
              </h1>
              <p className="text-sm text-[#6a7178] leading-6">
                {data.description}
              </p>
            </div>
            <div className="flex justify-end">
              <img src={data.image} alt={data.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
