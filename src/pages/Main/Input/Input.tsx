const Input = ({ subjects, setSubjects, addPost, setAddPost }: any) => {
  return (
    <div>
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
    </div>
  );
};

export default Input;