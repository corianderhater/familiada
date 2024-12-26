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
    question: "PIERWSZA RUNDA",
    answers: [],
  },
  {
    question: "Symbole reprezentujące miłość",
    answers: [
      { text: "serce", points: 20 },
      { text: "amorek", points: 18 },
      { text: "usta", points: 13 },
      { text: "róża", points: 12 },
      { text: "gołębie", points: 10 },
      { text: "obrączki", points: 5 },
    ],
  },
  {
    question: "Tradycje weselne",
    answers: [
      { text: "oczepiny", points: 20 },
      { text: "witanie chlebem i solą", points: 15 },
      { text: "pierwszy taniec", points: 14 },
      { text: "przenoszenie przez próg", points: 12 },
      { text: "tłuczenie kieliszków", points: 11 },
      { text: "śpiewanie „gorzko, gorzko”", points: 6 },
    ],
  },
  {
    question: "Czego byśmy nie zjedli przed wyjściem na randkę?",
    answers: [
      { text: "czosnku", points: 20 },
      { text: "cebuli", points: 18 },
      { text: "grochu", points: 12 },
      { text: "fasoli", points: 11 },
      { text: "soczewicy", points: 8 },
      { text: "kebaba", points: 7 },
    ],
  },
  {
    question: "Atrybuty św. Mikołaja",
    answers: [
      { text: "prezenty", points: 16 },
      { text: "sanie", points: 15 },
      { text: "czerwony strój", points: 12 },
      { text: "renifery", points: 11 },
      { text: "broda", points: 10 },
      { text: "worek", points: 8 },
    ],
  },
  {
    question: "Symbole bożonarodzeniowe",
    answers: [
      { text: "choinka", points: 18 },
      { text: "opłatek", points: 12 },
      { text: "szopka", points: 11 },
      { text: "gwiazda betlejemska", points: 8 },
    ],
  },
  {
    question: "Tradycje bożonarodzeniowe",
    answers: [
      { text: "łamanie się opłatkiem", points: 23 },
      { text: "12 potraw", points: 20 },
      { text: "wolne miejsce przy stole", points: 18 },
      { text: "sianko pod obrusem", points: 16 },
      { text: "pasterka", points: 12 },
      { text: "kolędowanie", points: 10 },
    ],
  },
  {
    question: "Potrawa wigilijna",
    answers: [
      { text: "karp", points: 24 },
      { text: "pierogi", points: 23 },
      { text: "ryba po grecku", points: 12 },
      { text: "sałatka jarzynowa", points: 11 },
      { text: "kutia", points: 10 },
      { text: "galareta", points: 9 },
    ],
  },
  {
    question: "Ciasto typowe dla Świąt Bożego Narodzenia",
    answers: [
      { text: "tarta cytrynowa", points: 25 },
      { text: "placek niebo", points: 22 },
      { text: "piernik", points: 18 },
      { text: "sernik", points: 8 },
    ],
  },
  {
    question: "Z czym może być pączek?",
    answers: [
      { text: "z marmoladą", points: 18 },
      { text: "z czekoladą", points: 16 },
      { text: "z adwokatem", points: 8 },
      { text: "z karmelem", points: 7 },
      { text: "z budyniem", points: 6 },
    ],
  },
  {
    question: "Wymień style pływackie",
    answers: [
      { text: "kraul", points: 20 },
      { text: "żabka", points: 18 },
      { text: "motylek", points: 10 },
      { text: "piesek", points: 1 },
    ],
  },
  {
    question: "Nazwa zwierzęcia z „ó” w nazwie",
    answers: [
      { text: "żółw", points: 22 },
      { text: "wiewiórka", points: 21 },
      { text: "królik", points: 17 },
      { text: "bóbr", points: 8 },
      { text: "wróbel", points: 7 },
      { text: "mrówka", points: 6 },
    ],
  },
  {
    question: "Ptak na literę K",
    answers: [
      { text: "kruk", points: 20 },
      { text: "kura", points: 19 },
      { text: "kukułka", points: 12 },
      { text: "kaczka", points: 10 },
      { text: "kawka", points: 7 },
      { text: "kos", points: 4 },
    ],
  },
  {
    question: "Gra lub zabawa z dziecięcych lat",
    answers: [
      { text: "berek", points: 23 },
      { text: "chowany", points: 22 },
      { text: "zbijak", points: 15 },
      { text: "kapsle", points: 11 },
      { text: "podchody", points: 10 },
      { text: "klasy", points: 8 },
    ],
  },
  {
    question: "Niespokrewniony członek rodziny",
    answers: [
      { text: "teściowa", points: 23 },
      { text: "żona", points: 20 },
      { text: "mąż", points: 18 },
      { text: "teść", points: 8 },
      { text: "szwagier", points: 7 },
    ],
  },
  {
    question: "Więcej niż jedno zwierzę to",
    answers: [
      { text: "owca", points: 23 },
      { text: "lama", points: 21 },
      { text: "stado", points: 18 },
      { text: "wataha", points: 12 },
      { text: "trzoda", points: 10 },
      { text: "ławica", points: 8 },
    ],
  },
  {
    question: "Wymień księżniczki disneya",
    answers: [
      { text: "Królewna Śnieżka", points: 23 },
      { text: "Śpiąca Królewna", points: 22 },
      { text: "Kopciuszek", points: 18 },
      { text: "Pocahontas", points: 11 },
      { text: "Elsa", points: 8 },
      { text: "Ariel", points: 6 },
    ],
  },
  {
    question: "Co nie ma skrzydeł, a leci?",
    answers: [
      { text: "Balon", points: 20 },
      { text: "czas", points: 18 },
      { text: "muzyka", points: 14 },
      { text: "latawiec", points: 11 },
      { text: "krew z nosa", points: 6 },
    ],
  },
  {
    question: "Jaki może być pilot?",
    answers: [
      { text: "Do telewizora", points: 20 },
      { text: "Do samolotu", points: 18 },
      { text: "Do wycieczek", points: 16 },
      { text: "Do samochodu", points: 12 },
      { text: "Rajdowy", points: 10 },
    ],
  },
  {
    question: "Podaj część ciała na 3 litery",
    answers: [
      { text: "ząb", points: 18 },
      { text: "oko", points: 15 },
      { text: "nos", points: 12 },
      { text: "udo", points: 11 },
    ],
  },
  {
    question: "Do czego może być płyn?",
    answers: [
      { text: "Do szyb", points: 20 },
      { text: "Do mycia naczyń", points: 18 },
      { text: "Do spryskiwaczy", points: 16 },
      { text: "Do płukania", points: 14 },
      { text: "Do podłóg", points: 12 },
      { text: "Do kąpieli", points: 11 },
    ],
  },
  {
    question: "Słowo, którego używamy zamiast „tak”",
    answers: [
      { text: "OK", points: 22 },
      { text: "no", points: 20 },
      { text: "dobrze", points: 18 },
      { text: "owszem", points: 17 },
      { text: "jasne", points: 11 },
      { text: "oczywiście", points: 6 },
    ],
  },
  {
    question: "Podaj słowa, które zaczynają się na „tele-„",
    answers: [
      { text: "telefon", points: 23 },
      { text: "telewizor", points: 22 },
      { text: "telenowela", points: 18 },
      { text: "telegram", points: 12 },
      { text: "teleskop", points: 10 },
      { text: "teleturniej", points: 7 },
    ],
  },
  {
    question: "Jaki może być rok?",
    answers: [
      { text: "Przestępny", points: 25 },
      { text: "kalendarzowy", points: 20 },
      { text: "szkolny", points: 18 },
      { text: "świetlny", points: 6 },
      { text: "liturgiczny", points: 3 },
    ],
  },
  {
    question: "Co zapada?",
    answers: [
      { text: "Zmrok", points: 23 },
      { text: "wyrok", points: 22 },
      { text: "decyzja", points: 18 },
      { text: "cisza", points: 14 },
    ],
  },
  {
    question: "Co możemy rozbić?",
    answers: [
      { text: "Szkło", points: 20 },
      { text: "jajko", points: 14 },
      { text: "bank", points: 11 },
      { text: "obóz", points: 8 },
    ],
  },
  {
    question: "Jak inaczej możemy nazwać mężczyznę?",
    answers: [
      { text: "Pan", points: 23 },
      { text: "facet", points: 22 },
      { text: "gość", points: 18 },
      { text: "chłop", points: 15 },
      { text: "typek", points: 10 },
    ],
  },
  {
    question: "Coś macierzyńskiego",
    answers: [
      { text: "instynkt", points: 30 },
      { text: "urlop", points: 25 },
      { text: "zasiłek", points: 20 },
    ],
  },
  {
    question: "Jaki może być klucz?",
    answers: [
      { text: "Do zamka", points: 23 },
      { text: "wiolinowy", points: 20 },
      { text: "francuski", points: 19 },
      { text: "hydrauliczny", points: 16 },
      { text: "ptaków", points: 10 },
    ],
  },
  {
    question: "Można mieć poczucie",
    answers: [
      { text: "humoru", points: 18 },
      { text: "czasu", points: 17 },
      { text: "winy", points: 16 },
      { text: "rytmu", points: 12 },
      { text: "bezpieczeństwa", points: 10 },
    ],
  },
  {
    question: "Słynny Krzysztof",
    answers: [
      { text: "Unger", points: 25 },
      { text: "Nowakowski", points: 24 },
      { text: "Kielan", points: 18 },
      { text: "Gajda", points: 16 },
      { text: "Krawczyk", points: 15 },
      { text: "Kolumb", points: 13 },
      { text: "Ibisz", points: 12 },
    ],
  },
  {
    question: "Jaki rodzaj butów ma w domu każdy mężczyzna?",
    answers: [
      { text: "Sportowe", points: 18 },
      { text: "zimowe", points: 17 },
      { text: "półbuty", points: 12 },
      { text: "klapki", points: 7 },
      { text: "sandały", points: 6 },
      { text: "narciarskie", points: 1 },
    ],
  },
  {
    question: "Największe hity zespołu Golec uOrkiestra",
    answers: [
      { text: "Ściernisko", points: 22 },
      { text: "Lornetka", points: 21 },
      { text: "Słodycze", points: 20 },
      { text: "Pędzą konie", points: 18 },
      { text: "Kto się ceni", points: 17 },
      { text: "Crazy is my life", points: 12 },
    ],
  },
  {
    question: "WIELKI FINAŁ!",
    answers: [],
  },
  {
    question: "Jakie państwa zwiedzili razem Młodzi?",
    answers: [
      { text: "Izrael", points: 35 },
      { text: "Chorwacja", points: 22 },
      { text: "Słowacja", points: 15 },
      { text: "Grecja", points: 11 },
      { text: "Turcja", points: 10 },
      { text: "Szwajcaria", points: 9 },
      { text: "Włochy", points: 7 },
      { text: "Polska", points: 5 },
      { text: "Egipt", points: 3 },
    ],
  },
  {
    question: "Jakimi formami przemieszczania razem się poruszali?",
    answers: [
      { text: "Samochód", points: 23 },
      { text: "Samolot", points: 18 },
      { text: "Żaglówka", points: 15 },
      { text: "Kajak", points: 12 },
      { text: "Rower", points: 10 },
      { text: "Karuzela", points: 9 },
      { text: "Narty zjazdowe", points: 8 },
      { text: "Łyżwy", points: 6 },
      { text: "Biegówki", points: 2 },
    ],
  },
  {
    question: "W jakim miejscu morsowali?",
    answers: [
      { text: "Jezioro Otomin", points: 30 },
      { text: "Morze Bałtyckie", points: 20 },
      { text: "Bania w ogródku", points: 19 },
    ],
  },
  {
    question: "Jakie sporty razem uprawiali?",
    answers: [
      { text: "Rower", points: 25 },
      { text: "Biegi", points: 18 },
      { text: "Narty", points: 13 },
      { text: "Żaglówki", points: 12 },
      { text: "Kajaki", points: 10 },
      { text: "Pływanie", points: 6 },
      { text: "Pilates", points: 5 },
      { text: "Joga", points: 2 },
    ],
  },
  {
    question: "Jak Krzysztof woła na Alicję?",
    answers: [
      { text: "Żonko", points: 20 },
      { text: "Alicja", points: 18 },
      { text: "Mama (w trzeciej osobie)", points: 12 },
      { text: "Kochanie", points: 10 },
    ],
  },
  {
    question: "Jak Alicja woła na Krzysztofa?",
    answers: [
      { text: "Kaloryferek", points: 20 },
      { text: "Mężulku", points: 18 },
      { text: "Krzyś", points: 12 },
      { text: "Krzysiu", points: 10 },
    ],
  },
  {
    question: "Jakie dodatki miała na sobie Panna Młoda w dniu ślubu?",
    answers: [
      { text: "Lisek", points: 20 },
      { text: "Kolczyki", points: 18 },
      { text: "Bukiet", points: 16 },
      { text: "Welon", points: 14 },
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

  const aTeam = "Panna młoda";
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

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev - 1) % questions.length);
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
          edycja: 35 rocznica Ali i Krzysia! ❤️🪸❤️🪸
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
        <div className="flex justify-between w-full py-4">
          <button
            onClick={handlePrevQuestion}
            className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Poprzednie pytanie
          </button>
          <button
            onClick={handleNextQuestion}
            className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Następne pytanie
          </button>
        </div>
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
