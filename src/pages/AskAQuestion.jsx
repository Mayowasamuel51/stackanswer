import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import topics from './topics'
// axios,k,a ,l
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const AskAQuestion = () => {
  var notyf = new Notyf();
  const [topic, setTopic] = useState([]);
  const [error, setError] = useState([])
  const [inputError, setInputError] = useState(false);
  const handletoplic = (e) => {
    setTopic(e.target.value)
    console.log(e.target.value)
  }
  const [inputs, setInput] = useState({
    title: '',
    email: '',
    phone:'',
    portfolio_url: '',
    language_category: '',
    problem_descritpion: '',
    ptitle: ''
  })
  const inputsHandler = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  }
  const [file, setFile] = useState(null)

  const getFile = (e) => {
    setFile(e.target.files[0])
  }

  const postData = (e) => {
    e.preventDefault()
    const form = new FormData()
    const question_martic =  Math.floor(  Math.random() * 1000)


    form.append('question_martic', question_martic);
    form.append('name', inputs.name);
    form.append('portfolio_url', inputs.portfolio_url);
    form.append('problem_descritpion', inputs.problem_descritpion);
    form.append('problem_title', inputs.title)
    form.append('images', file);
    form.append('language_category', topic)
    form.append('phone',inputs.phone)
    axios.post('/api/codardeveloper', form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((data) => {
      if (data.data.status === 200) {
        notyf.success('SUCCESSFULLY ADDED...............');
        console.log('enterd well done')
        // history.push(`/showpage/${input.tilte}`)


      } else if (data.data.status === 422) {
        setError(data.data.errors)
        console.log('fill this space')
      }
    })
  }

  return (
    <div className=" m-2 px-4 py-2 rounded-lg bg-white shadow-xl" >
      <Form
        onSubmit={postData}
        className=" flex flex-col gap-y-5 w-3/4"
        method="post"
        style={{ marginBottom: '200px' }}
      >

        <div className=" flex flex-col">
          <label className="text-2xl font-semibold">
            Title
          </label>
          <span className=" text-xs">Be specific and imagine you’re asking a question to another person.</span>
          <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={inputsHandler}
            className="form-input px-4 py-2 my-1 rounded-md "
            placeholder="e.g. What is a JavaScript function"
          />
            <span className="bg-red-100 font-medium">{error.problem_title}</span>
        </div>

        <div className="flex flex-col">
          <label className=" text-2xl font-semibold">
            What are the details of your problem?
          </label>
          <span className=" text-xs">Introduce the problem and expand on what you put in the title. Minimum 20 characters.</span>
          <textarea
            value={inputs.problem_descritpion}
            onChange={inputsHandler}
            type="text"
            name="problem_descritpion"
            className="form-textarea px-4 py-2 my-1 rounded-md"
            placeholder="Describe the problem you're having"
          />
            <span className="bg-red-100 font-medium">{error.problem_descritpion}</span>
        </div>

        <div className=" flex flex-col">
          <label className="text-2xl font-semibold">
            Upload a screenshot of the problem
          </label>
          <input
            type="file"
            onChange={getFile}
            name="file"
            className="form-input px-4 py-2 my-1 rounded-md "
          />
            <span className="bg-red-100 font-medium">{error.images}</span>
        </div>

        <div>
          <label>
            Programming Language
          </label>
        </div>
        <select className="" onChange={handletoplic}>

          <option >Select the problem's Programming language</option>
          {topics.map((item, index) => {
            return (
              <option key={index} value={item}>{item}</option>
            )
          })}
        </select>
        <div>
        <span className="bg-red-100 font-medium">{error.language_category}</span>
        </div>

        <div className=" flex flex-col">
          <label className="text-2xl font-semibold">
            Input Porfolio URL
          </label>
          <input
            onChange={inputsHandler}
            type="text"
            value={inputs.portfolio_url}
            name="portfolio_url"
            className="form-input px-4 py-2 my-1 rounded-md "
            placeholder="https://github/mike/Portfolio.com"
          />
          <span className="bg-red-100 font-medium">{error.portfolio_url}</span>
        </div>

        <div className=" flex flex-col">
          <label className="text-2xl font-semibold">
           Phone number
          </label>
          <input
            onChange={inputsHandler}
            type="text"
            value={inputs.phone}
            name="phone"
            className="form-input px-4 py-2 my-1 rounded-md "
            placeholder="09022123231"
          />
          <span className="bg-red-100 font-medium">{error.portfolio_url}</span>
        </div>
        <button
          style={{ marginBottom: '50px' }}
          className=" bg-blue-500 rounded-md py-2 uppercase font-semibold text-white"
          type="submit">   Post  </button>
        <br />  <br />  <br />  <br />
      </Form>
    </div>
  )
}

export default AskAQuestion