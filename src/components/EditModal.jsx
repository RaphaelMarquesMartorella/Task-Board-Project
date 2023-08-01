import React from "react";
import "./EditModal.scss";


const DeleteModal = ({isOpen, setOpenModal, editTaskTitle, setInputValue, product}) => {
  if(isOpen){
  return (
    <div>
      <div id="myModal" className="modal-edit">
        <div className="modal-content-edit">
          <h3>Deseja editar esse item?</h3>
          <p>{product.task}</p>
          <input type="text" onChange={setInputValue} placeholder="Colocar as descrições das tarefas aqui."/>
          <div className="modal-buttons">
          <button onClick={setOpenModal} className="blue-button">Não</button>
          <button type="submit" onClick={editTaskTitle} className="white-button">Sim</button>
          </div>
        </div>
      </div>
    </div>
  );
};
}

export default DeleteModal;
