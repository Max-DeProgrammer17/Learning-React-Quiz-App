import './buttons.molecules.css'
function Buttons(){
    return(
    <>
      <div className="btn-holder">
        <div><button className="left-btn">Previous</button></div>
        <div><button className="right-btn">Next</button></div>
      </div>
    </>
    )
}
export default Buttons;