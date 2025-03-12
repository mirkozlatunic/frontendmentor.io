import Header from "./Header";
import Hero from "./Hero";
import Section1 from "./Section1";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="font-red-hat container mx-auto flex min-h-screen flex-col items-center justify-center px-8">
      <Header />
      <Hero />
      <Section1 />
      <Footer />
    </div>
  );
}

export default App;
