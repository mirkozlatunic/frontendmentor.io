import Textblock from './Textblock';
import Card from './Card';

function App() {
  return (
    <div className="font-poppins flex flex-col justify-center items-center min-h-screen py-14 px-7.5 md:px-13.5 overflow-auto">
      <Textblock />
      <Card />
    </div>
  );
}

export default App;
