//Component To Display Title And Image Of The Object
import {Link} from 'react-router-dom'
const Box = ({ name}) => {

    return (
        <>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col" >
                <div className="tm-bg-primary-dark tm-block" >
                <Link to={`/home/${name}`} className="tm-block-title"><h2 className="tm-block-title">{name}</h2></Link>
                   
                </div>
            </div>
        </>
    )
}

export default Box;