import { useEffect, useState } from "react";

function App() {

  const [subjects, setSubjects] = useState<any>([]);
  const [modalSwitch, setModalSwitch] = useState(0);
  const [modal, setModal] = useState(false);
  const [addPost, setAddPost] = useState(``);

  useEffect(() => {
    fetch(`/data/subjects.json`)
      .then(res => res.json())
      .then(res => setSubjects(res));
  }, []);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        subjects.map(function (item: any, i: any) {
          return (
            <div className="list" key={i}>

              <h4 onClick={() => { setModal(!modal); setModalSwitch(i); }}>
                {item.subject}
                <span onClick={(e) => {
                  e.stopPropagation();
                  const copy = [...subjects];
                  copy[i].like = copy[i].like + 1;
                  console.log(copy);
                  setSubjects(copy);
                }}> 👍</span>{item.like}
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
