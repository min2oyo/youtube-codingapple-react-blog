import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Modal from "../../components/Modal/Modal";
import PostList from "./PostList/PostList";
import Input from "./Input/Input";

const Main = () => {
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
    <div className="main">
      <Nav />
      {subjects.map((item: any, i: number) =>
        <PostList key={item.id} item={item} i={i} subjects={subjects} setSubjects={setSubjects} modal={modal} setModal={setModal} setModalSwitch={setModalSwitch} />
      )}
      <Input subjects={subjects} setSubjects={setSubjects} addPost={addPost} setAddPost={setAddPost} />
      {modal && <Modal modalSwitch={modalSwitch} subjects={subjects} />}

    </div >
  );
};

export default Main;