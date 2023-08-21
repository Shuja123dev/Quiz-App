import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import QuestionData from './context/QuestionData';
import Header from './components/Header/Header';
import Result from './components/Result/Result';
import QuizExport from './components/QuizPart/QuizExport';
import CheckedQuiz from './components/CheckedQuiz/CheckedQuiz';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <QuestionData>
            <Header />
            <Routes>
              <Route path='/' element={<QuizExport />} />
              <Route path='/result' element={<Result />} />
              <Route path='/checked-quiz' element={<CheckedQuiz />} />
            </Routes>
          </QuestionData>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
