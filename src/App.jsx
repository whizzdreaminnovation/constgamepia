import React, { useState } from "react";
import {
  Scale,
  Users,
  Shield,
  Eye,
  Award,
  MapPin,
  BookOpen,
  Megaphone,
  Home,
  Briefcase,
} from "lucide-react";

const ConstitutionGame = () => {
  const [gameState, setGameState] = useState("intro");
  const [currentScenario, setCurrentScenario] = useState(0);
  const [collectedCards, setCollectedCards] = useState([]);
  const [choices, setChoices] = useState([]);

  const scenarios = [
    // (⚖️) --- Scenario 1 ---
    {
      id: 1,
      title: "The Detention",
      situation:
        "You're walking home late at night when police officers stop you. They ask you to come to the station for questioning about an incident in your neighborhood. You haven't done anything wrong, but they're insistent.",
      choices: [
        {
          text: "Go with them and answer all their questions immediately",
          outcome:
            "You spoke without legal counsel. While cooperation is good, you have the RIGHT TO SILENCE under Article 20(3). You cannot be compelled to be a witness against yourself.",
          correct: false,
        },
        {
          text: "Ask why you're being detained and request to contact a lawyer",
          outcome:
            "Excellent choice! You exercised your RIGHT TO SILENCE and RIGHT TO LEGAL AID. Article 20(3) protects you from self-incrimination, and Article 22 ensures your right to consult a legal practitioner.",
          correct: true,
        },
        {
          text: "Refuse to cooperate and walk away",
          outcome:
            "While you have rights, this approach could escalate the situation. The better path is to assert your rights respectfully.",
          correct: false,
        },
      ],
      card: {
        title: "Right Against Self-Incrimination",
        article: "Article 20(3)",
        description:
          "No person accused of any offence shall be compelled to be a witness against himself.",
        museumLink:
          "First Floor - Freedoms Gallery (Thematic displays on Rights and Freedoms)",
        detailLink:
          "Ask the 3D Hologram of Dr. B.R. Ambedkar about this right at the Mezzanine Floor",
        icon: Shield,
        color: "from-blue-500 to-blue-700",
      },
    },

    // (🗣️) --- Scenario 2 ---
    {
      id: 2,
      title: "The Protest",
      situation:
        "Your university is implementing a new policy that students disagree with. Your friends want to organize a peaceful protest on campus. The administration warns it might lead to disciplinary action.",
      choices: [
        {
          text: "Stay silent and don't participate",
          outcome:
            "You avoided trouble, but you also didn't exercise your fundamental rights. Democracy thrives when citizens peacefully voice their concerns.",
          correct: false,
        },
        {
          text: "Organize a peaceful protest, informing authorities in advance",
          outcome:
            "Perfect! You exercised your FREEDOM OF SPEECH AND ASSEMBLY under Article 19(1)(a) and 19(1)(b).",
          correct: true,
        },
        {
          text: "Organize a disruptive protest to force immediate change",
          outcome:
            "While your passion is understandable, Article 19 protects peaceful assembly.",
          correct: false,
        },
      ],
      card: {
        title: "Freedom of Speech & Assembly",
        article: "Article 19(1)(a) & (b)",
        description:
          "All citizens shall have the right to freedom of speech and expression, and to assemble peaceably without arms.",
        museumLink:
          "Ground Floor - Infographic sections explaining key Constitutional Provisions",
        detailLink:
          "Watch the Constituent Assembly debates on this right at the Mezzanine Floor",
        icon: Users,
        color: "from-orange-500 to-orange-700",
      },
    },
  ];

  const startGame = () => {
    setGameState("playing");
    setCurrentScenario(0);
    setCollectedCards([]);
    setChoices([]);
  };

  const makeChoice = (choiceIndex) => {
    const scenario = scenarios[currentScenario];
    const choice = scenario.choices[choiceIndex];
    setChoices((prev) => [
      ...prev,
      { scenario: currentScenario, choice: choiceIndex, correct: choice.correct },
    ]);
    if (choice.correct) {
      setCollectedCards((prev) => [...prev, scenario.card]);
    }
    setGameState("result");
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario((n) => n + 1);
      setGameState("playing");
    } else {
      setGameState("complete");
    }
  };

  const resetGame = () => {
    setGameState("intro");
    setCurrentScenario(0);
    setCollectedCards([]);
    setChoices([]);
  };

  const IntroScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 border-4 border-orange-600">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4">
            <Scale className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Constitution Quest</h1>
          <p className="text-xl text-orange-700 font-semibold mb-2">
            Your Rights. Your Story.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Face real-life situations where your constitutional rights matter. Make choices,
            discover your rights, and collect cards that unlock India's living Constitution.
          </p>
        </div>
        <button
          onClick={startGame}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-xl font-bold py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Begin Your Constitutional Journey
        </button>
      </div>
    </div>
  );

  const ScenarioScreen = () => {
    const scenario = scenarios[currentScenario];
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-orange-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{scenario.title}</h2>
          <p className="text-lg mb-6 text-gray-800">{scenario.situation}</p>
          {scenario.choices.map((choice, i) => (
            <button
              key={i}
              onClick={() => makeChoice(i)}
              className="w-full text-left p-4 mb-3 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
            >
              {String.fromCharCode(65 + i)}. {choice.text}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const ResultScreen = () => {
    const scenario = scenarios[currentScenario];
    const choice = choices[choices.length - 1];
    const selectedChoice = scenario.choices[choice.choice];
    const CardIcon = scenario.card.icon;
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-orange-600">
          <h2
            className={`text-2xl font-bold mb-4 ${
              selectedChoice.correct ? "text-green-700" : "text-amber-700"
            }`}
          >
            {selectedChoice.correct ? "✅ Correct!" : "⚠️ Think again"}
          </h2>
          <p className="text-lg mb-6 text-gray-800">{selectedChoice.outcome}</p>

          {selectedChoice.correct && (
            <div
              className={`p-6 rounded-2xl text-white shadow-xl bg-gradient-to-br ${scenario.card.color}`}
            >
              <div className="flex items-center mb-3">
                <CardIcon className="w-8 h-8 mr-2" />
                <h3 className="text-lg font-bold">{scenario.card.title}</h3>
              </div>
              <p className="text-sm opacity-90 mb-2">{scenario.card.article}</p>
              <p className="text-sm mb-2">{scenario.card.description}</p>
              <p className="text-xs italic opacity-80">
                📍 {scenario.card.museumLink}
              </p>
            </div>
          )}

          <button
            onClick={nextScenario}
            className="w-full mt-6 bg-gradient-to-r from-orange-600 to-red-600 text-white text-lg font-bold py-3 rounded-xl hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-200"
          >
            Next →
          </button>
        </div>
      </div>
    );
  };

  const CompleteScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-lg">
        <Award className="w-16 h-16 mx-auto text-orange-600 mb-4" />
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Journey Complete!</h2>
        <p className="text-lg text-gray-700 mb-4">
          You collected {collectedCards.length} of {scenarios.length} rights cards.
        </p>
        <button
          onClick={resetGame}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-lg font-bold py-3 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-200"
        >
          Play Again
        </button>
      </div>
    </div>
  );

  return (
    <>
      {gameState === "intro" && <IntroScreen />}
      {gameState === "playing" && <ScenarioScreen />}
      {gameState === "result" && <ResultScreen />}
      {gameState === "complete" && <CompleteScreen />}
    </>
  );
};

export default ConstitutionGame;
