import { useEffect, useState } from "react";

import Input from "./Input/Input";
import Nav from "../../components/Nav/Nav";
import Post from "./Post/Post";
import Modal from "../../components/Modal/Modal";
import { Isubjects } from "../../types";

const Main = () => {
  const [subjects, setSubjects] = useState<Isubjects[]>([]);
  const [modalSwitch, setModalSwitch] = useState(0);
  const [modal, setModal] = useState(false);
  const [addPost, setAddPost] = useState(``);
  console.log(subjects);

  useEffect(() => {
    fetch(`/data/subjects.json`)
      .then(res => res.json())
      .then(res => setSubjects(res));
  }, []);

  return (
    <div className="main">
      <Nav />
      <Input subjects={subjects} setSubjects={setSubjects} addPost={addPost} setAddPost={setAddPost} />
      {subjects.map((item: any, i: number) =>
        <Post key={item.id} item={item} i={i} subjects={subjects} setSubjects={setSubjects} modal={modal} setModal={setModal} setModalSwitch={setModalSwitch} />
      )}
      {modal && <Modal modalSwitch={modalSwitch} subjects={subjects} />}
    </div >
  );
};

export default Main;