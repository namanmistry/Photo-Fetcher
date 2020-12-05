//Component To Display Title And Image Of The Object
const Box = ({ title, url }) => {

    return (
        <>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col" >
                <div className="tm-bg-primary-dark tm-block" >
                    <h2 className="tm-block-title">{title}</h2>
                    <img width="300" height="300" src={url} alt="img" />
                </div>
            </div>
        </>
    )
}

export default Box;