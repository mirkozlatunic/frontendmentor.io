import { CardLarge, CardSmall } from "./Card";

function Main() {
  return (
    <div>
      <div className="align-center flex justify-center">
        <CardLarge />
      </div>
      <h2 className="font-bold text-lg pt-11 pb-6 pl-40">Overview Today</h2>
      <div className="align-center flex justify-center">
        <CardSmall />
      </div>
    </div>
  );
}

export default Main;
