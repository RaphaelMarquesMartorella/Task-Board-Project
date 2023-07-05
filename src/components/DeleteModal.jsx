import React from "react";
import "./DeleteModal.scss";


const DeleteModal = ({isOpen, setOpenModal, deleteTaskTitle}) => {
  if(isOpen){

  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <h3>Deseja excluir esse item?</h3>
          <p>Colocar as descrições das tarefas aqui.</p>
          <div className="modal-buttons">
          <button onClick={setOpenModal} className="blue-button">Não</button>
          <button type="submit" onClick={deleteTaskTitle} className="white-button">Sim</button>
          </div>
        </div>
      </div>
    </div>
  );
};
}

export default DeleteModal;
