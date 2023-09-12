import { useState } from "react";

function App() {

  const [subjects, setSubjects] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [addPost, setAddPost] = useState(``);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        subjects.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setTitle(i); }}>
                {subjects[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  const copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}>👍</span> {like[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                const copy = [...subjects];
                copy.splice(i, 1);
                setSubjects(copy);
              }}>삭제</button>
            </div>
          );
        })
      }

      <input onChange={(e) => {
        setAddPost(e.target.value);
      }} />
      <button onClick={() => {
        const copy = [...subjects];
        copy.unshift(addPost);
        setSubjects(copy);
      }}>글발행</button>

      {
        modal == true ? <Modal title={title} subjects={subjects} /> : null
      }

    </div >
  );
}

export default App;

function Modal(props: any) {
  return (
    <div className="modal">
      <h4>{props.subjects[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );

}
