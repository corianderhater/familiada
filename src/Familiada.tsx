// Familiada.tsx
import React, { useState } from "react";
import SoundButton from "./SoundButton";

export type Answer = {
  text: string;
  points: number;
};

export type Question = {
  question: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    question: "Jakie państwa zwiedzili razem Młodzi?",
    answers: [
      { text: "Izrael", points: 10 },
      { text: "Chorwacja", points: 9 },
      { text: "Słowacja", points: 8 },
      { text: "Grecja", points: 7 },
      { text: "Turcja", points: 6 },
      { text: "Szwajcaria", points: 5 },
      { text: "Włochy", points: 4 },
      { text: "Polska", points: 3 },
      { text: "Egipt", points: 2 },
    ],
  },
  {
    question: "Jakimi formami przemieszczania razem się poruszali?",
    answers: [
      { text: "Samochód", points: 9 },
      { text: "Samolot", points: 8 },
      { text: "Żaglówka", points: 7 },
      { text: "Kajak", points: 6 },
      { text: "Rower", points: 5 },
      { text: "Karuzela", points: 4 },
      { text: "Narty zjazdowe", points: 3 },
      { text: "Łyżwy", points: 2 },
      { text: "Biegówki", points: 1 },
    ],
  },
  {
    question: "W jakim miejscu morsowali?",
    answers: [
      { text: "Jezioro Otomin", points: 3 },
      { text: "Morze Bałtyckie", points: 2 },
      { text: "Bania w ogródku", points: 1 },
    ],
  },
  {
    question: "Jakie sporty razem uprawiali?",
    answers: [
      { text: "Rower", points: 9 },
      { text: "Biegi", points: 8 },
      { text: "Narty", points: 7 },
      { text: "Żaglówki", points: 6 },
      { text: "Kajaki", points: 5 },
      { text: "Pływanie", points: 4 },
      { text: "Pilates", points: 3 },
      { text: "Joga", points: 2 },
    ],
  },
  {
    question: "Jak Krzysztof woła na Alicję?",
    answers: [
      { text: "Alicja", points: 4 },
      { text: "Mama (w trzeciej osobie)", points: 3 },
      { text: "Żonko", points: 2 },
      { text: "Kochanie", points: 1 },
    ],
  },
  {
    question: "Jak Alicja woła na Krzysztofa?",
    answers: [
      { text: "kaloryferek", points: 4 },
      { text: "Mężulku", points: 3 },
      { text: "Krzyś", points: 2 },
      { text: "Krzysiu", points: 1 },
    ],
  },
  {
    question: "Ile dokładnie dni byli w związku w dniu ślubu?",
    answers: [{ text: "Brak danych", points: 10 }],
  },
  {
    question: "Jakie dodatki miała na sobie Panna Młoda w dniu ślubu?",
    answers: [{ text: "Kolczyki", points: 10 }],
  },
  {
    question: "Symbole reprezentujące miłość",
    answers: [
      { text: "serce", points: 6 },
      { text: "amorek", points: 5 },
      { text: "usta", points: 4 },
      { text: "róża", points: 3 },
      { text: "gołębie", points: 2 },
      { text: "pierścionek/obrączki", points: 1 },
    ],
  },
  {
    question: "Tradycje weselne",
    answers: [
      { text: "oczepiny", points: 6 },
      { text: "witanie chlebem i solą", points: 5 },
      { text: "pierwszy taniec", points: 4 },
      { text: "przenoszenie przez próg", points: 3 },
      { text: "tłuczenie kieliszków", points: 2 },
      { text: "śpiewanie „gorzko, gorzko”", points: 1 },
    ],
  },
  {
    question: "Czego byśmy nie zjedli przed wyjściem na randkę?",
    answers: [
      { text: "czosnku", points: 6 },
      { text: "cebuli", points: 5 },
      { text: "grochu", points: 4 },
      { text: "fasoli", points: 3 },
      { text: "soczewicy", points: 2 },
      { text: "kebaba", points: 1 },
    ],
  },
  {
    question: "Atrybuty św. Mikołaja",
    answers: [
      { text: "prezenty", points: 6 },
      { text: "sanie", points: 5 },
      { text: "czerwony strój", points: 4 },
      { text: "renifery", points: 3 },
      { text: "broda", points: 2 },
      { text: "worek", points: 1 },
    ],
  },
  {
    question: "Symbole bożonarodzeniowe",
    answers: [
      { text: "choinka", points: 5 },
      { text: "opłatek", points: 4 },
      { text: "szopka", points: 3 },
      { text: "gwiazda betlejemska", points: 2 },
    ],
  },
  {
    question: "Tradycje bożonarodzeniowe",
    answers: [
      { text: "łamanie się opłatkiem", points: 6 },
      { text: "12 potraw", points: 5 },
      { text: "wolne miejsce przy stole", points: 4 },
      { text: "sianko pod obrusem", points: 3 },
      { text: "pasterka", points: 2 },
      { text: "kolędowanie", points: 1 },
    ],
  },
  {
    question: "Potrawa wigilijna",
    answers: [
      { text: "karp", points: 6 },
      { text: "pierogi", points: 5 },
      { text: "kutia", points: 4 },
      { text: "ryba po grecku", points: 3 },
      { text: "sałatka jarzynowa", points: 2 },
      { text: "galareta", points: 1 },
    ],
  },
  {
    question: "Ciasto typowe dla Świąt Bożego Narodzenia",
    answers: [
      { text: "makowiec", points: 5 },
      { text: "sernik", points: 4 },
      { text: "piernik", points: 3 },
    ],
  },
  {
    question: "Z czym może być pączek?",
    answers: [
      { text: "z marmoladą", points: 6 },
      { text: "z czekoladą", points: 5 },
      { text: "z adwokatem", points: 4 },
      { text: "z karmelem", points: 3 },
      { text: "z budyniem", points: 2 },
    ],
  },
  {
    question: "Wymień style pływackie",
    answers: [
      { text: "kraul", points: 4 },
      { text: "żabka", points: 3 },
      { text: "motylek", points: 2 },
      { text: "piesek", points: 1 },
    ],
  },
  {
    question: "Nazwa zwierzęcia z „ó” w nazwie",
    answers: [
      { text: "żółw", points: 6 },
      { text: "wiewiórka", points: 5 },
      { text: "królik", points: 4 },
      { text: "bóbr", points: 3 },
      { text: "wróbel", points: 2 },
      { text: "mrówka", points: 1 },
    ],
  },
  {
    question: "Ptak na literę K",
    answers: [
      { text: "kruk", points: 6 },
      { text: "kura", points: 5 },
      { text: "kukułka", points: 4 },
      { text: "kaczka", points: 3 },
      { text: "kawka", points: 2 },
      { text: "kos", points: 1 },
    ],
  },
  {
    question: "Gra lub zabawa z dziecięcych lat",
    answers: [
      { text: "berek", points: 6 },
      { text: "chowany", points: 5 },
      { text: "zbijak", points: 4 },
      { text: "kapsle", points: 3 },
      { text: "podchody", points: 2 },
      { text: "klasy", points: 1 },
    ],
  },
  {
    question: "Niespokrewniony członek rodziny",
    answers: [
      { text: "teściowa", points: 6 },
      { text: "żona", points: 5 },
      { text: "mąż", points: 4 },
      { text: "teść", points: 3 },
      { text: "szwagier", points: 2 },
    ],
  },
  {
    question: "Więcej niż jedno zwierzę to",
    answers: [
      { text: "stado", points: 5 },
      { text: "wataha", points: 4 },
      { text: "trzoda", points: 3 },
      { text: "ławica", points: 2 },
      { text: "rój", points: 1 },
    ],
  },
  {
    question: "Wymień księżniczki disneya",
    answers: [
      { text: "Królewna Śnieżka", points: 6 },
      { text: "Śpiąca Królewna", points: 5 },
      { text: "Kopciuszek", points: 4 },
      { text: "Pocahontas", points: 3 },
      { text: "Elsa", points: 2 },
      { text: "Ariel", points: 1 },
    ],
  },
  {
    question: "Co nie ma skrzydeł, a leci?",
    answers: [
      { text: "Balon", points: 6 },
      { text: "czas", points: 5 },
      { text: "muzyka", points: 4 },
      { text: "latawiec", points: 3 },
      { text: "krew z nosa", points: 2 },
    ],
  },
  {
    question: "Jaki może być pilot?",
    answers: [
      { text: "Do telewizora", points: 5 },
      { text: "Do samolotu", points: 4 },
      { text: "Do wycieczek", points: 3 },
      { text: "Do samochodu", points: 2 },
      { text: "Rajdowy", points: 1 },
    ],
  },
  {
    question: "Podaj część ciała na 3 litery",
    answers: [
      { text: "oko", points: 4 },
      { text: "nos", points: 3 },
      { text: "udo", points: 2 },
      { text: "ząb", points: 1 },
    ],
  },
  {
    question: "Do czego może być płyn?",
    answers: [
      { text: "Do szyb", points: 6 },
      { text: "Do mycia naczyń", points: 5 },
      { text: "Do spryskiwaczy", points: 4 },
      { text: "Do płukania", points: 3 },
      { text: "Do podłóg", points: 2 },
      { text: "Do kąpieli", points: 1 },
    ],
  },
  {
    question: "Słowo, którego używamy zamiast „tak”",
    answers: [
      { text: "OK", points: 6 },
      { text: "no", points: 5 },
      { text: "dobrze", points: 4 },
      { text: "owszem", points: 3 },
      { text: "jasne", points: 2 },
      { text: "oczywiście", points: 1 },
    ],
  },
  {
    question: "Podaj słowa, które zaczynają się na „tele-„",
    answers: [
      { text: "telefon", points: 6 },
      { text: "telewizor", points: 5 },
      { text: "telenowela", points: 4 },
      { text: "telegram", points: 3 },
      { text: "teleskop", points: 2 },
      { text: "teleturniej", points: 1 },
    ],
  },
  {
    question: "Jaki może być rok?",
    answers: [
      { text: "Przestępny", points: 5 },
      { text: "kalendarzowy", points: 4 },
      { text: "szkolny", points: 3 },
      { text: "liturgiczny", points: 2 },
      { text: "świetlny", points: 1 },
    ],
  },
  {
    question: "Co zapada?",
    answers: [
      { text: "Zmrok", points: 4 },
      { text: "wyrok", points: 3 },
      { text: "decyzja", points: 2 },
      { text: "cisza", points: 1 },
    ],
  },
  {
    question: "Co możemy rozbić?",
    answers: [
      { text: "Szkło", points: 4 },
      { text: "jajko", points: 3 },
      { text: "bank", points: 2 },
      { text: "obóz", points: 1 },
    ],
  },
  {
    question: "Jak inaczej możemy nazwać mężczyznę?",
    answers: [
      { text: "Pan", points: 5 },
      { text: "facet", points: 4 },
      { text: "gość", points: 3 },
      { text: "chłop", points: 2 },
      { text: "typek", points: 1 },
    ],
  },
  {
    question: "Coś macierzyńskiego",
    answers: [
      { text: "instynkt", points: 3 },
      { text: "urlop", points: 2 },
      { text: "zasiłek", points: 1 },
    ],
  },
  {
    question: "Jaki może być klucz?",
    answers: [
      { text: "Do zamka", points: 5 },
      { text: "wiolinowy", points: 4 },
      { text: "francuski", points: 3 },
      { text: "hydrauliczny", points: 2 },
      { text: "ptaków", points: 1 },
    ],
  },
  {
    question: "Można mieć poczucie",
    answers: [
      { text: "humoru", points: 5 },
      { text: "czasu", points: 4 },
      { text: "winy", points: 3 },
      { text: "rytmu", points: 2 },
      { text: "bezpieczeństwa", points: 1 },
    ],
  },
  {
    question: "Słynny Krzysztof",
    answers: [
      { text: "Kolumb", points: 10 },
      { text: "Krawczyk", points: 9 },
      { text: "Ibisz", points: 8 },
      { text: "Cugowski", points: 7 },
      { text: "Hołowczyc", points: 6 },
      { text: "Skiba", points: 5 },
      { text: "Unger", points: 4 },
      { text: "Nowakowski", points: 3 },
      { text: "Gajda", points: 2 },
      { text: "Kielan", points: 1 },
    ],
  },
  {
    question: "Jaki rodzaj butów ma w domu każdy mężczyzna?",
    answers: [
      { text: "Sportowe", points: 6 },
      { text: "zimowe", points: 5 },
      { text: "półbuty", points: 4 },
      { text: "klapki", points: 3 },
      { text: "sandały", points: 2 },
      { text: "narciarskie/snowboardowe", points: 1 },
    ],
  },
  {
    question: "Największe hity zespołu Golec uOrkiestra",
    answers: [
      { text: "Ściernisko", points: 6 },
      { text: "Lornetka", points: 5 },
      { text: "Słodycze", points: 4 },
      { text: "Pędzą konie", points: 3 },
      { text: "Kto się ceni", points: 2 },
      { text: "Crazy is my life", points: 1 },
    ],
  },
];

const Familiada: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [revealedAnswers, setRevealedAnswers] = useState<boolean[]>([]);
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [currentTeam, setCurrentTeam] = useState("A");
  const [inputValue, setInputValue] = useState("");
  const [mistakesA, setMistakesA] = useState(0);
  const [mistakesB, setMistakesB] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const aTeam = "Pani młoda";
  const bTeam = "Pan młody";

  const setTeamAPlays = () => {
    setCurrentTeam(aTeam);
  };

  const setTeamBPlays = () => {
    setCurrentTeam(bTeam);
  };

  const addScoreTeamA = () => {
    setTeamAScore(roundScore + teamAScore);
    setRoundScore(0);
  };

  const addScoreTeamB = () => {
    setTeamBScore(roundScore + teamBScore);
    setRoundScore(0);
  };

  const handleAnswerSubmit = () => {
    const answerIndex = currentQuestion.answers.findIndex(
      (a) => a.text.toLowerCase() === inputValue.toLowerCase()
    );

    if (answerIndex !== -1 && !revealedAnswers[answerIndex]) {
      const newRevealedAnswers = [...revealedAnswers];
      newRevealedAnswers[answerIndex] = true;
      setRevealedAnswers(newRevealedAnswers);
      setRoundScore(roundScore + currentQuestion.answers[answerIndex].points);
      const audio = new Audio("ok.mp3");
      audio.play();
    } else {
      const audio = new Audio("zla.mp3");
      audio.play();
      if (currentTeam === aTeam) {
        setMistakesA(mistakesA + 1);
      } else {
        setMistakesB(mistakesB + 1);
      }
    }

    setInputValue("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAnswerSubmit();
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
    setRevealedAnswers([]);
    setInputValue("");
    setMistakesA(0);
    setMistakesB(0);
    setRoundScore(0);
    const audio = new Audio("porundzie.mp3");
    audio.play();
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="flex flex-col items-center text-yellow-400 bg-black font-mono p-6 rounded-lg shadow-md mx-auto border border-gray-700">
        <span className="text-4xl font-bold mb-4">FAMILIADA</span>
        <span className="text-2xl italic font-medium mb-4">
          edycja: 35 rocznica Ali i Krzysia! ❤️❤️
        </span>
        <div className="flex justify-between w-full text-4xl text-yellow-400 mb-4 font-bold py-5">
          <span className="">
            Drużyna {aTeam}: {teamAScore}
          </span>
          <span className="">
            Drużyna {bTeam}: {teamBScore}
          </span>
        </div>
        <div className="flex justify-between w-full font-bold text-6xl">
          <div className="flex space-x-2 mb-4">
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className="w-20 h-20 border-2 border-yellow-400 rounded-full flex items-center justify-center"
              >
                {index < mistakesA ? "X" : ""}
              </span>
            ))}
          </div>
          <div className="flex space-x-2 mb-4">
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className="w-20 h-20 border-2 border-yellow-400 rounded-full flex items-center justify-center"
              >
                {index < mistakesB ? "X" : ""}
              </span>
            ))}
          </div>
        </div>
        <h2 className="text-4xl font-semibold text-yellow-300 mb-6 text-center">
          {currentQuestion.question}
        </h2>

        <div className="grid grid-cols-1 gap-4 mb-6 max-w-2xl text-2xl">
          {currentQuestion.answers.map((answer, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 px-4"
            >
              <span>
                {revealedAnswers[index] ? (
                  <span>
                    {index + 1}. {answer.text}
                  </span>
                ) : (
                  <span>
                    {index + 1}..........................................
                  </span>
                )}
              </span>
              <span>{revealedAnswers[index] ? answer.points : null}</span>
            </div>
          ))}
        </div>

        <div className="my-6 text-xl">suma: {roundScore}</div>

        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Podaj odpowiedź!"
            className="p-2 border border-yellow-400 rounded-lg flex-1 bg-black placeholder-yellow-400"
          />
          <button
            onClick={handleAnswerSubmit}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sprawdź
          </button>
        </div>

        <div className="flex justify-between w-full">
          <button onClick={addScoreTeamA}>+ pkt {aTeam}</button>
          <button onClick={addScoreTeamB}>+ pkt {bTeam}</button>
        </div>
        <div className="flex justify-between w-full py-4">
          <button
            className={`${
              currentTeam === aTeam
                ? "bg-yellow-400 text-black p-2 rounded-lg"
                : "border-2 border-yellow-400 p-2 rounded-lg"
            }`}
            onClick={setTeamAPlays}
          >
            Odpowiada drużyna {aTeam}
          </button>
          <button
            className={`${
              currentTeam === bTeam
                ? "bg-yellow-400 text-black p-2 rounded-lg"
                : "border-2 border-yellow-400 p-2 rounded-lg"
            }`}
            onClick={setTeamBPlays}
          >
            Odpowiada drużyna {bTeam}
          </button>
        </div>
        <button
          onClick={handleNextQuestion}
          className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Następne pytanie
        </button>
        <div className="flex">
          <div className="m-7">muzyka:</div>
          <SoundButton path={"/intro.mp3"} text="intro" className="m-5" />
          <SoundButton
            path={"/przerwa.mp3"}
            text="przerwa"
            className="m-5"
            volume={0.1}
          />
        </div>
      </div>
    </div>
  );
};

export default Familiada;
