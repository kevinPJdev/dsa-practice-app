import Localbase from "localbase";
import QuestionData from '../450dsa.js'
let db = new Localbase("db");

export const insertData = () => {
  QuestionData.map((topic, index) => {
    db.collection("450dsaArchive").add(topic, topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase());
  }) 
};

export const getData = (callback) => {
  db.collection("450dsaArchive")
  .get()
  .then((data) => {
    if(data.length === 0) {
      insertData(callback)
    } else {
      data.sort((a,b) => {
        return a.position - b.position;
      });
      callback(data);
    }

  })
}

export function getTopicData(key, callback) {
	db.collection("450dsaArchive")
		.doc(key)
		.get()
		.then((document) => {
			callback(document);
		});
}

export function updateDBData(key, updateData) {
	db.collection("450dsaArchive").doc(key).update(updateData);
}