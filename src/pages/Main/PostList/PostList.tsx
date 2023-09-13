const PostList = ({ item, i, subjects, setSubjects, modal, setModal, setModalSwitch }: any) => {
  return (
    <div className="post-list">

      <h4 onClick={() => { setModal(!modal); setModalSwitch(i); }}>
        {item.subject}
        <span onClick={(e) => {
          e.stopPropagation();
          const copy = [...subjects];
          copy[i].like = copy[i].like + 1;
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
};

export default PostList;