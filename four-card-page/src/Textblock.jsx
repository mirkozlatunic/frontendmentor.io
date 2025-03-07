const text = [
  {
    title: 'Reliable, efficient delivery',
    subtitle: 'Powered by Technology',
    description:
      'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful',
  },
];

function Textblock() {
  return (
    <div className="text-center pb-15 text-[#4d4f62]">
      {text.map((item, index) => {
        return (
          <div key={index}>
            <h1 className="text-2xl md:text-4xl font-extralight">
              {item.title}
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold pb-2">
              {item.subtitle}
            </h2>
            <p className="text-sm md:text-base md:max-w-[540px]">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Textblock;
