import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import { useQuery, useMutation } from "@tanstack/react-query";
import { getQuestion } from './api/getQuestion';
import axios from 'axios';
import { Link } from 'react-router-dom';
//this is lastest q
import { useLoaderData } from 'react-router-dom';

const MeetTheTeam = () => {
  const [data, setData] = useState([]);
  const [bool, setBool] = useState(true)
  const fetchPost = () => {
    axios('/api/getquestions').then((res) => {
      if (res.status === 200) {
        setData(res.data.data)
        console.log(res.data.data)
      }
    })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  let content = '';

  return (
    <div className="m-2 p-2 rounded-lg bg-white">

      <div className='contai'>
        <h1>Top Questions</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/dashboard/questions/ask" style={{ textDecoration: 'none', color: 'white' }}>  Ask Question</Link>
        </button>
        <div className='mt-3'>
          <List />
        </div>
      </div>
    </div>
  )
}


function List() {
  const questions = useLoaderData()
  return (
    <>
      <div className=''>
        {questions.map((item, index) => {
          return (
            <div key={index}>
              <hr />
              <div>
                <Link to={`/createanswer/${item.question}/${item.problem_title}/${item.ids}`}>{item.problem_title}  </Link>
                <br />
                <p>
                  {item.ptitle}
                  {item.problem_note}
                </p>
                <h4>Question on   <span>{item.language}</span></h4>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

// loader function ......................
export const questionLoader = async () => {
  const res = await axios('http://127.0.0.1:8000/api/getquestions');
  if (res.status === 200) {
    const data = await res.data.data
    return data
  }

}
export default MeetTheTeam