import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

function CreateAnswer() {
    const { question, problem_title, id } = useParams();
    const main_id = id;
    const [data, setData] = useState([]);
    const [answerquestions, setanswerquestions] = useState([])
    // const answerquestions = useLoaderData()
    var notyf = new Notyf();
    const getquestions_id = question;
    const p_title = problem_title;
    const [text, setText] = useState('');
    const inputsHandler = (e) => {
        setText(e.target.value)
    }
    const fetchPost = () => {
        axios('/api/getquestions').then((res) => {
            if (res.status === 200) {
                setData(res.data.data)
            }
        })
    }
    let myquestion_id = ''
    data.map((item) => {
        myquestion_id = item.ids
    })
    const postAnswer = (e) => {
        e.preventDefault();
        let data = {
            user_id:main_id,
            descritpion:text,
            problem_title:p_title
        }
        axios.post(`/api/codardeveloper/${getquestions_id}/${p_title}`, data).then((res) => {
            if (res.status === 200) {
                window.location.reload()
                console.log('done')
                notyf.success('SUCCESSFULLY ADDED...............');
            }
        })
    }
    const getInfo = async () => {
        axios(`/api/codardeveloper/answer/${main_id}`).then((res) => {
            if (res.status === 200) {
                const api = res.data.data
                setanswerquestions(api)
                console.log(api)
            }
        })
    }
    useEffect(() => {
        fetchPost()

    }, [])
    useEffect(() => {
        setTimeout(() => {
            getInfo()
        }, 1000)
    }, [])

    return (
        <>
            <div className=" container">
                <div>
                    <h3>
                        {problem_title}
                    </h3>
                </div>
                <div>
                    {answerquestions.map((item, index) => {
                        return (
                            <div key={index}>
                                <hr />
                                <div>

                                    <br />
                                    <p>

                                        {item.descritpion}
                                    </p>
                                   
                                </div>
                            </div>
                        )
                    })}

                </div>

                <form className=" flex flex-col gap-y-5 w-3/4" onSubmit={postAnswer}>
                    <div className=" flex flex-col">
                        <label className="text-2xl font-semibold">
                            Your Answer
                        </label>

                        <textarea
                            type="text"
                            onChange={inputsHandler}
                            value={text}
                            name="title"
                            className="form-input px-4 py-2 my-1 rounded-md "
                            placeholder="e.g. What is a JavaScript function"
                        />
                        {/* <span className="bg-red-100 font-medium">{error.problem_title}</span> */}
                    </div>

                    <button
                        style={{ marginBottom: '50px' }}
                        className=" bg-blue-500 rounded-md py-2 p-2 uppercase font-semibold text-white"
                        type="submit">   Post Answer </button>
                </form>
            </div>

        </>
    )
}

export default CreateAnswer;