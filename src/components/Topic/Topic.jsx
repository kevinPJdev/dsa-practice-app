import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const Topic = ({data}) => {

  const [select, setSelected] = useState([]);
	const [questionsTableData, setQuestionsTableData] = useState([]);
	const [topicName, setTopicName] = useState("");

  useEffect(() => {
    if(data!==undefined) {
      let doneQuestion = [];

      let tableData = data.questions.map((question, index) => {
        if(question.Done) {
          doneQuestion.push(index);
        }

        return {
          id: index,
          question: (
            <>
              <a
								href={question.URL}
								target="_blank"
								rel="noopener noreferrer"
								style={{ fontWeight: "600", fontSize: "20px" }}
								className="question-link"
							>
								{question.Problem}
							</a>
            </>
          ),
          _is_selected: question.Done,
					_search_text: question.Problem,
        };
      });
      setQuestionsTableData(tableData);
			setTopicName(data.topicName);
			setSelected(doneQuestion);
    }
  }, [data]);

  const columns = [
		{
			dataField: "id",
			text: "Q-Id",
			headerStyle: { width: "80px", fontSize: "20px", textAlign: "center" },
			style: { fontSize: "20px", cursor: "pointer", textAlign: "center" },
			
		},
		{
			dataField: "question",
			text: "Questions",
			headerStyle: { fontSize: "20px", textAlign: "center" },
		},
		{
			dataField: "_is_selected",
			text: "Is Selected",
			headerStyle: { fontSize: "20px" },
			hidden: true,
			sort: true,
		},
		{
			dataField: "_search_text",
			text: "Search Text",
			headerStyle: { fontSize: "20px" },
			hidden: true,
		},
	];
	const rowStyle = { fontSize: "20px" };
	const selectRow = {
		mode: "checkbox",
		style: { background: "#c8e6c9", fontSize: "24px" },
		selected: select,
		hideSelectAll: true,
	};
	const sortMode = {
		dataField: "_is_selected",
		order: "asc",
	};

  

  return (
    <>
      <h3 className="app__flex">
				<Link to="/">Topics</Link>/{topicName}
			</h3>

      <ToolkitProvider
					className="float-right"
					keyField="id"
					data={questionsTableData}
					columns={columns}
					rowStyle={rowStyle}
					search
				>
					{(props) => (
						<div>
							
							<div className="container container-custom" style={{ overflowAnchor: "none" }}>
								
									<BootstrapTable id="question-table" {...props.baseProps} selectRow={selectRow} sort={sortMode} />
					
							</div>
						</div>
					)}
				</ToolkitProvider>
    </>
  )
}

export default Topic