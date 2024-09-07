import "./modal.css"

const Modal = ({handleCloseModal}) => {

    const handleOutsideClick = (e) => {
        if(e.target.className === "modal"){
          handleCloseModal()
        }
      }    

    return (
        <div onClick={handleOutsideClick} className="modal">
           <div className="modal-content">
           <p className="add_movies">Successfully added</p>
           </div>
        </div>
    )
}
export default Modal