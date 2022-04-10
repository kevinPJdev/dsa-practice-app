import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

import './TopicCards.scss'

const TopicCards = ({ data }) => {

  let totalQuestions = 0;
  let completedQuestions = 0;

  let topicCards = data.map((topic, index) => {
    let {topicName, started, doneQuestions, questions} = topic;
    let solvedPercent = (questions.length - doneQuestions)/questions.length * 100;
    totalQuestions += questions.length;
    completedQuestions += doneQuestions;

  });

  return (
    <div className='app__flex app__topic-container'>
      {data.map((topics, index) => (
        <Link key={index}
          to={`/${topics.topicName
          .replace(/[^A-Z0-9]+/gi, "_")
          .toLowerCase()}`}
        style={{ textDecoration: "none" }}>
          <motion.div
          initial= {{ opacity: 0.75 }}
          whileInView={{ scale: [0, 1] }}
          whileHover={{opacity: [0.75,1], scale: [1, 1.1]}}
          transition={{duration: 0.25 , ease: 'easeInOut', staggerChildren: 0.5}}
          className="app__flex app__topic-card">
            <div className="app__topic-card-header">
              <h2 className="bold-text">{topics.topicName}</h2>
              <div className="app__topic-card-header-btn">{ topics.started ? "Continue": "Start now"}</div>
            </div>
            <h3>Total questions : {topics.questions.length}</h3>
            <h3>{topics.questions.length - topics.doneQuestions === topics.questions.length ? "Not yet started" : `${topics.questions.length - topics.doneQuestions} more to go!` } </h3>
            <div className="wrapper">
              <div className="progress-bar">
                <span className="progress-bar-fill" style ={{width: "70%"}}></span>
              </div>
		        </div>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}

export default TopicCards