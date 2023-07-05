import React from "react";
import "./AddModal.scss";


const DeleteModal = ({isOpen, setOpenModal, addInputValue, addTaskTitle}) => {
    if(isOpen){
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          
          <h3>Deseja criar esse item?</h3>
          <input type="text" onChange={addInputValue} placeholder="Colocar as descrições das tarefas aqui."/>
          <div className="modal-buttons">
          <button onClick={setOpenModal} className="blue-button">Não</button>
          <button type="submit" onClick={addTaskTitle}  className="white-button">Sim</button>
          </div>
        </div>
      </div>
    </div>
  );
    };
};



export default DeleteModal;