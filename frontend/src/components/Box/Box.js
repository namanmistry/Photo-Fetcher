//Component To Display Title And Image Of The Object
const Box = ({ name }) => {

    return (
        <>
            <div key={name} className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col" >
                <div className="tm-bg-primary-dark tm-block" >
                    <h2 className="tm-block-title">{name}</h2>
                    {/* <img src='result.jpg' className="chartjs-render-monitor img-fluid img-thumbnail" style={{ display: "block" }} /> */}
                </div>
            </div>
        </>
    )
}

export default Box;