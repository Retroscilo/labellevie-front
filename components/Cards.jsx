"use client";
import parse from "html-react-parser";
import Card from "./Card";

function Cards(props) {
  const { title, card } = props.data;
  return (
    <div className="sm:mx-12">
      <div className="bg-mauve max-w-body p-8 mx-auto my-8">
        <div className="bg-white p-8">
          <div className={`font-title text-titles font-semibold text-center mb-8 text-lg`}>{parse(title)}</div>
          <div className="grid grid-flow-row grid-cols-wrap_2">
            {card.map((c, i) => (
              <div key={i} className="justify-self-center w-fit">
                <Card data={c} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
