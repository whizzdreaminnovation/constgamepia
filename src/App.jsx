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

export default function App() {
  const [gameState, setGameState] = useState("intro");
  const [currentScenario, setCurrentScenario] = useState(0);
  const [collectedCards, setCollectedCards] = useState([]);
  const [choices, setChoices] = useState([]);

  const scenarios = [
    {
      id: 1,
      title: "The Detention",
      situation:
        "You're walking home late at night when police stop you and insist you come to the station for questioning. You haven't done anything wrong.",
      choices: [
        {
          text: "Go with them and answer everything immediately",
          outcome:
            "You spoke without legal counsel. You have the RIGHT TO SILENCE under Article 20(3). You cannot be compelled to be a witness against yourself.",
          correct: false,
        },
        {
          text: "Ask why you're being detained and request to contact a lawyer",
          outcome:
            "Excellent! You used your RIGHT TO SILENCE (Art. 20(3)) and RIGHT TO LEGAL AID (Art. 22).",
          correct: true,
        },
        {
          text: "Refuse to cooperate and walk away",
          outcome:
            "Asserting rights is good, but abruptly walking away can escalate things. Ask clearly and request counsel.",
          correct: false,
        },
      ],
      card: {
        title: "Right Against Self-Incrimination",
        article: "Article 20(3) + Article 22",
        description:
          "No person accused of any offence shall be compelled to be a witness against himself; right to consult a legal practitioner.",
        museumLink:
          "First Floor - Freedoms Gallery (Rights and Freedoms)",
        detailLink:
          "Ask the 3D Hologram of Dr. B.R. Ambedkar at the Mezzanine Floor",
        icon: Shield,
        color: "from-blue-500 to-blue-700",
      },
    },
    {
      id: 2,
      title: "The Protest",
      situation:
        "Your university plans a controversial policy. Friends want a peaceful protest; admin warns of discipline.",
      choices: [
        {
          text: "Stay silent and avoid participating",
          outcome:
            "No trouble, but you didn’t exercise your rights. Democracies need peaceful voices.",
          correct: false,
        },
        {
          text: "Organize a peaceful protest and inform authorities",
          outcome:
            "Correct! You used FREEDOM OF SPEECH & ASSEMBLY under Article 19(1)(a) & (b).",
          correct: true,
        },
        {
          text: "Block gates and disrupt classes",
          outcome:
            "Article 19 protects peaceful assembly; disruption can undermine your cause.",
          correct: false,
        },
      ],
      card: {
        title: "Freedom of Speech & Assembly",
        article: "Article 19(1)(a) & (b)",
        description:
          "Right to freedom of speech/expression and to assemble peaceably without arms.",
        museumLink:
          "Ground Floor - Infographics on Constitutional Provisions",
        detailLink:
          "Watch Constituent Assembly debates at the Mezzanine Floor",
        icon: Users,
        color: "from-orange-500 to-orange-700",
      },
    },
    {
      id: 3,
      title: "The Discrimination",
      situation:
        "A classmate is denied entry to a campus event due to caste. Organisers say it’s ‘private’.",
      choices: [
        {
          text: "Tell them to ignore it",
          outcome:
            "Discrimination should not be ignored. Equality and dignity matter.",
          correct: false,
        },
        {
          text: "Report it to authorities and support your classmate",
          outcome:
            "Correct! Article 15 prohibits discrimination; Article 14 ensures equality before law.",
          correct: true,
        },
        {
          text: "Confront the organisers aggressively",
          outcome:
            "Intent is noble, but use lawful channels for effective redressal.",
          correct: false,
        },
      ],
      card: {
        title: "Right to Equality",
        article: "Articles 14–15",
        description:
          "Equality before law; no discrimination on religion, race, caste, sex, or place of birth.",
        museumLink:
          "Mezzanine Floor - 3D printed bust wall of Assembly members",
        detailLink:
          "Interact with the Ambedkar Hologram for equality debates",
        icon: Scale,
        color: "from-green-500 to-green-700",
      },
    },
    {
      id: 4,
      title: "The Privacy Breach",
      situation:
        "College installs CCTV everywhere and wants to track library browsing for ‘security’.",
      choices: [
        {
          text: "Accept it for safety",
          outcome:
            "Security matters, but fundamental rights do too. Ask for necessity and proportionality.",
          correct: false,
        },
        {
          text: "Demand clear data policy and raise privacy concerns",
          outcome:
            "Correct! Privacy is a fundamental right under Article 21 (Puttaswamy).",
          correct: true,
        },
        {
          text: "Ban all cameras entirely",
          outcome:
            "Balance is key: proportionate, justified surveillance only.",
          correct: false,
        },
      ],
      card: {
        title: "Right to Privacy",
        article: "Article 21",
        description:
          "Privacy is intrinsic to life and personal liberty.",
        museumLink:
          "First Floor - Immersive Chamber Experience",
        detailLink:
          "Archival footage of constitutional debates (Mezzanine)",
        icon: Eye,
        color: "from-purple-500 to-purple-700",
      },
    },
    {
      id: 5,
      title: "The Education Barrier",
      situation:
        "A brilliant 12-year-old wants to drop out due to fees; dreams of becoming a doctor.",
      choices: [
        {
          text: "Say education is a luxury now",
          outcome: "Education is a right, not a luxury.",
          correct: false,
        },
        {
          text: "Help them apply for RTE schemes/scholarships",
          outcome:
            "Correct! Article 21A guarantees free & compulsory education (6–14).",
          correct: true,
        },
        {
          text: "Suggest only self-study without school",
          outcome:
            "Self-study helps, but the State must ensure schooling.",
          correct: false,
        },
      ],
      card: {
        title: "Right to Education",
        article: "Article 21A",
        description:
          "Free and compulsory education for children aged 6–14.",
        museumLink:
          "Ground Floor - Social Justice artworks",
        detailLink:
          "See Directive Principles exhibits (Ground Floor)",
        icon: BookOpen,
        color: "from-pink-500 to-pink-700",
      },
    },
    {
      id: 6,
      title: "The Media Controversy",
      situation:
        "A verified, critical article about public spending is published; authorities threaten closure.",
      choices: [
        {
          text: "Shut it down to maintain order",
          outcome:
            "A free press is essential to democracy; factual criticism is protected speech.",
          correct: false,
        },
        {
          text: "Defend the paper’s right to publish",
          outcome:
            "Correct! Freedom of expression includes press under Article 19(1)(a).",
          correct: true,
        },
        {
          text: "Allow only positive news",
          outcome: "Democracy needs scrutiny, not propaganda.",
          correct: false,
        },
      ],
      card: {
        title: "Freedom of Press",
        article: "Article 19(1)(a)",
        description:
          "Freedom of speech/expression includes press freedom.",
        museumLink:
          "First Floor - Samvidhaan Theatre",
        detailLink:
          "Immersive Chamber: press & democracy",
        icon: Megaphone,
        color: "from-red-500 to-red-700",
      },
    },
    {
      id: 7,
      title: "The Forced Eviction",
      situation:
        "A family living 20 years in a house is told to vacate in 24 hours, no compensation.",
      choices: [
        {
          text: "Tell them to leave; the project needs land",
          outcome:
            "Article 300A protects property; due process and fair compensation are required.",
          correct: false,
        },
        {
          text: "Help them seek legal aid and demand due process",
          outcome:
            "Correct! Right to property (Art. 300A) + procedure under Article 21.",
          correct: true,
        },
        {
          text: "Organise violent resistance",
          outcome:
            "Use legal remedies; violence undermines justice.",
          correct: false,
        },
      ],
      card: {
        title: "Right to Property & Due Process",
        article: "Article 300A + Article 21",
        description:
          "No deprivation of property except by authority of law; follow due process with compensation.",
        museumLink:
          "Ground Floor - Constitutional Provisions infographics",
        detailLink:
          "Constitution Gardens: sculptures on democracy",
        icon: Home,
        color: "from-teal-500 to-teal-700",
      },
    },
    {
      id: 8,
      title: "The Workplace Exploitation",
      situation:
        "Your friend works 14-hour shifts; child labourers are present; complaints lead to threats.",
      choices: [
        {
          text: "Accept the conditions to keep the job",
          outcome:
            "Exploitation is unconstitutional. Article 23 prohibits forced labour; Article 24 bans child labour in hazardous work.",
          correct: false,
        },
        {
          text: "Report to labour authorities; organise for rights",
          outcome:
            "Correct! Stand for PROHIBITION OF EXPLOITATION (Arts. 23 & 24).",
          correct: true,
        },
        {
          text: "Quietly find another job",
          outcome:
            "Violations should be reported so others aren’t harmed.",
          correct: false,
        },
      ],
      card: {
        title: "Right Against Exploitation",
        article: "Articles 23 & 24",
        description:
          "Bans trafficking, forced labour, and child labour below 14 in hazardous work.",
        museumLink:
          "First Floor - Rights & Freedoms displays",
        detailLink:
          "Mezzanine - Social justice archival footage",
        icon: Briefcase,
        color: "from-indigo-500 to-indigo-700",
      },
    },
    // NEW #9
    {
      id: 9,
      title: "The Travel Restriction",
      situation:
        "Local authorities say students cannot leave the district during exams week, even for family emergencies.",
      choices: [
        {
          text: "Obey without question; movement can be banned anytime",
          outcome:
            "Restrictions must be reasonable and lawful. Blanket bans without legal basis are problematic.",
          correct: false,
        },
        {
          text: "Request the legal order and grounds; seek exemption for emergencies",
          outcome:
            "Correct! FREEDOM OF MOVEMENT under Article 19(1)(d) allows movement throughout India, subject to reasonable restrictions by law.",
          correct: true,
        },
        {
          text: "Ignore the notice entirely",
          outcome:
            "Engage properly: ask for the order, then challenge unreasonable restrictions.",
          correct: false,
        },
      ],
      card: {
        title: "Freedom of Movement",
        article: "Article 19(1)(d)",
        description:
          "Citizens may move freely throughout India, subject to reasonable legal restrictions.",
        museumLink: "First Floor - Thematic displays",
        detailLink: "Samvidhaan Theatre: freedoms in practice",
        icon: Award,
        color: "from-sky-500 to-sky-700",
      },
    },
    // NEW #10
    {
      id: 10,
      title: "The Religion Policy",
      situation:
        "Your hostel announces a policy banning all personal prayer or religious gatherings in common rooms.",
      choices: [
        {
          text: "Accept it; institutions can ban any religious practice",
          outcome:
            "Institutions can regulate use of spaces, but blanket bans may violate freedom of conscience and free profession of religion.",
          correct: false,
        },
        {
          text: "Request a reasonable-use policy that accommodates quiet prayer without disturbing others",
          outcome:
            "Correct! Articles 25–28 protect freedom of religion, subject to public order, morality, health, and other provisions.",
          correct: true,
        },
        {
          text: "Hold a loud gathering in defiance",
          outcome:
            "Rights are balanced with others’ rights and order. Seek accommodation within rules.",
          correct: false,
        },
      ],
      card: {
        title: "Freedom of Religion",
        article: "Articles 25–28",
        description:
          "Freedom of conscience and free profession, practice, and propagation of religion (subject to reasonable limits).",
        museumLink: "Ground Floor - Constitutional values gallery",
        detailLink: "Mezzanine - Debates on fundamental rights",
        icon: Scale,
        color: "from-amber-500 to-amber-700",
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
    if (choice.correct) setCollectedCards((prev) => [...prev, scenario.card]);
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
          <p className="text-xl text-orange-700 font-semibold mb-2">Your Rights. Your Story.</p>
          <p className="text-gray-600">
            Make choices in real scenarios, discover your rights, and collect cards linked to museum exhibits.
          </p>
        </div>
        <button
          onClick={startGame}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-xl font-bold py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all"
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
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-orange-600">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-4 py-2 rounded-full">
                Scenario {currentScenario + 1} of {scenarios.length}
              </span>
              <span className="text-sm font-semibold text-gray-600">
                Cards: {collectedCards.length}/{scenarios.length}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{scenario.title}</h2>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500 mb-6">
              <p className="text-lg text-gray-800">{scenario.situation}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What do you do?</h3>
              {scenario.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => makeChoice(index)}
                  className="w-full text-left p-5 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all group"
                >
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 group-hover:bg-orange-700">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-gray-800 font-medium">{choice.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
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
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-orange-600 mb-6">
            <div
              className={`text-center mb-6 p-4 rounded-xl ${
                selectedChoice.correct ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
              }`}
            >
              <h2 className="text-2xl font-bold">
                {selectedChoice.correct ? "✓ Constitutional Choice!" : "⚠ Consider This..."}
              </h2>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <p className="text-lg text-gray-800">{selectedChoice.outcome}</p>
            </div>

            {selectedChoice.correct && (
              <div className={`bg-gradient-to-br ${scenario.card.color} p-8 rounded-2xl text-white shadow-xl`}>
                <div className="flex items-center justify-between mb-4">
                  <CardIcon className="w-16 h-16" />
                  <Award className="w-12 h-12 opacity-70" />
                </div>
                <h3 className="text-2xl font-bold mb-1">CARD UNLOCKED!</h3>
                <h4 className="text-xl font-bold">{scenario.card.title}</h4>
                <p className="text-sm font-semibold opacity-90 mb-2">{scenario.card.article}</p>
                <p className="text-base mb-4">{scenario.card.description}</p>
                <div className="border-t border-white/40 pt-3 text-sm">
                  <p className="font-semibold flex items-center mb-1">
                    <MapPin className="w-5 h-5 mr-2" /> Explore at the museum:
                  </p>
                  <p className="opacity-90">{scenario.card.museumLink}</p>
                  <p className="opacity-90 mt-1">{scenario.card.detailLink}</p>
                </div>
              </div>
            )}

            <button
              onClick={nextScenario}
              className="w-full mt-6 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xl font-bold py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all"
            >
              {currentScenario < scenarios.length - 1 ? "Next Scenario →" : "See Your Results →"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CompleteScreen = () => {
    const score = collectedCards.length;
    const total = scenarios.length;
    const percentage = Math.round((score / total) * 100);

    let badge = "";
    let badgeColor = "";
    if (percentage === 100) {
      badge = "Constitutional Champion 🏆";
      badgeColor = "from-yellow-400 to-orange-500";
    } else if (percentage >= 75) {
      badge = "Rights Defender ⚖";
      badgeColor = "from-blue-400 to-blue-600";
    } else if (percentage >= 50) {
      badge = "Democracy Explorer 📚";
      badgeColor = "from-green-400 to-green-600";
    } else {
      badge = "Civic Learner 🌱";
      badgeColor = "from-gray-400 to-gray-600";
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-orange-600 mb-6 text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4">
              <Award className="w-20 h-20 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Journey Complete!</h2>
            <div className={`inline-block bg-gradient-to-r ${badgeColor} text-white px-8 py-4 rounded-2xl mb-4 shadow-lg`}>
              <p className="text-2xl font-bold">{badge}</p>
            </div>
            <p className="text-2xl text-orange-700 font-semibold mb-2">
              You collected {score} out of {total} Rights Cards
            </p>
            <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 px-8 py-3 rounded-full">
              <span className="text-3xl font-bold text-orange-700">{percentage}% Constitutional Awareness</span>
            </div>
          </div>

          {collectedCards.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Collection</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {collectedCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <div key={index} className={`bg-gradient-to-br ${card.color} p-6 rounded-xl text-white shadow-lg`}>
                      <div className="flex items-center mb-3">
                        <Icon className="w-12 h-12 mr-3" />
                        <div>
                          <h4 className="text-lg font-bold">{card.title}</h4>
                          <p className="text-sm opacity-90">{card.article}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed mb-3">{card.description}</p>
                      <div className="border-t border-white/40 pt-3">
                        <p className="text-xs font-semibold flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {card.museumLink}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <button
            onClick={resetGame}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-xl font-bold py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all"
          >
            Play Again & Collect All Cards
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {gameState === "intro" && <IntroScreen />}
      {gameState === "playing" && <ScenarioScreen />}
      {gameState === "result" && <ResultScreen />}
      {gameState === "complete" && <CompleteScreen />}
    </div>
  );
}
