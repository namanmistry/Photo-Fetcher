//This Component Basically Shows Any Notice Or Message That You Want To Display On Each Page
//pageInfo Parameter Will Contain Message That You Want To Display
function PageInfo({ pageInfo }) {
    return (
        <>
            <div className="row">
                <div className="col">
                    <p className="text-white mt-5 mb-5"><b>{pageInfo}</b></p>
                </div>
            </div>
        </>
    )
}

export default PageInfo;