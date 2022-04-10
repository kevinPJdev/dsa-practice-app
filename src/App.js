import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topic from './components/Topic/Topic';
import TopicCards from './components/TopicCards/TopicCards'
import Header from './components/Header/Header'
import { insertData, getData } from './services/dbServices'
import './App.scss';

function App() {
  const [questionData, setQuestionData] = useState([]);
  useEffect(() => {
    getData((QuestionData)=> {
      setQuestionData(QuestionData);
    })
    console.log("this is the data", questionData);
  }, []);

  return (
    <div className="app">
      <Header />
        <Routes>
          <Route exact path="/" element={<TopicCards data={questionData}></TopicCards>}/>
          <Route path="/array" element={<Topic data={questionData[0]} />} />
          <Route path="/matrix" element={<Topic data={questionData[1]} />} />
          <Route path="/string" element={<Topic data={questionData[2]} />} />
          <Route path="/search_sort" element={<Topic data={questionData[3]} />} />
          <Route path="/linked_list" element={<Topic data={questionData[4]} />} />
          <Route path="/binary_trees" element={<Topic data={questionData[5]} />} />
          <Route path="/bst" element={<Topic data={questionData[6]} />} />
          <Route path="/greedy" element={<Topic data={questionData[7]} />} />
          <Route path="/backtracking" element={<Topic data={questionData[8]} />} />
          <Route path="/stacks_queues" element={<Topic data={questionData[9]} />} />
          <Route path="/heap" element={<Topic data={questionData[10]} />} />
          <Route path="/graph" element={<Topic data={questionData[11]} />} />
          <Route path="/trie" element={<Topic data={questionData[12]} />} />
          <Route path="/dynamic_programming" element={<Topic data={questionData[13]} />} />
          <Route path="/bit_manipulation" element={<Topic data={questionData[14]} />} />
        </Routes>
    </div>
  );
}

export default App;
