import { useState } from "react";

function App() {

  const data = [
    {
      id: 1,
      subject: `남자코트 추천`,
      description: `정말 좋음`,
      like: 0,
      createDate: `2020-11-10`,
      modifiedDate: ``
    },
    {
      id: 2,
      subject: `강남 우동맛집`,
      description: `맛있쪄용`,
      like: 0,
      createDate: `2020-11-11`,
      modifiedDate: ``
    },
    {
      id: 3,
      subject: `파이썬독학`,
      description: `헥헥`,
      like: 0,
      createDate: `2020-11-12`,
      modifiedDate: ``
    },
  ];

  const [subjects, setSubjects] = useState(data);
  const [modalSwitch, setModalSwitch] = useState(0);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [addPost, setAddPost] = useState(``);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        subjects.map(function (item, i) {
          return (
            <div className="list" key={i}>

              <h4 onClick={() => { setModal(!modal); setModalSwitch(i); }}>
                {item.subject}
                <span onClick={(e) => {
                  e.stopPropagation();
                  const copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}>👍</span> {item.like}
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
        setSubjects([{
          id: 0,
          subject: addPost,
          description: ``,
          like: 0,
          createDate: `2020-00-00`,
          modifiedDate: ``
        }, ...subjects]);
      }}>글 발행</button>

      {
        modal && <Modal modalSwitch={modalSwitch} subjects={subjects} />
      }

    </div >
  );
}

export default App;

function Modal({ modalSwitch, subjects }: any) {
  return (
    <div className="modal">
      <h4>{subjects[modalSwitch].subject}</h4>
      <p>{subjects[modalSwitch].createDate}</p>
      <p>{subjects[modalSwitch].description}</p>
      <button>글수정</button>
    </div>
  );

}
