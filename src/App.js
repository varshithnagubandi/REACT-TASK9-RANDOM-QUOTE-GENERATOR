import "./App.css";

function App() {
  const quotes = [
    "Life isn’t about getting and having, it’s about giving and being.",
    "Whatever the mind of man can conceive and believe, it can achieve.",
    "Strive not to be a success, but rather to be of value.",
    "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    "I attribute my success to this: I never gave or took any excuse.",
    "You miss 100% of the shots you don’t take.",
    "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "Definiteness of purpose is the starting point of all achievement.",
    "We must balance conspicuous consumption with conscious capitalism.",
    "Life is what happens to you while you’re busy making other plans.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  return (
    <div>
      <div>
        <h1 className="main">REFRESH TO GET NEW QUOTE . . .</h1>
      </div>
      <div className="new">
        <h3 className="sub-main">{quote}</h3>
      </div>
    </div>
  );
}

export default App;
