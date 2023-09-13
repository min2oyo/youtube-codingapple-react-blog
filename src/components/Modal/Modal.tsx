const Modal = ({ modalSwitch, subjects }: any) => {
  return (
    <div className="modal">
      <h4>{subjects[modalSwitch].subject}</h4>
      <p>{subjects[modalSwitch].createDate}</p>
      <p>{subjects[modalSwitch].description}</p>
      <button>글수정</button>
    </div>
  );
};

export default Modal;