import { AppConstants } from "../../constants/app-constants";



function AppDetails() {
    return ( 
        <>
            <div>
                <h1>{AppConstants.APP_DETAILS.LABEL}</h1>
                <h3>{AppConstants.APP_DETAILS.APP_VERSION.LABEL}</h3>
                <span>{AppConstants.APP_DETAILS.APP_VERSION.VERSION}</span>
                <h3>{AppConstants.APP_DETAILS.DEVELOPER_DETAILS.LABEL}</h3>
                <ul>
                {AppConstants.APP_DETAILS.DEVELOPER_DETAILS.DEVELOPERS.map((value,index)=>{
                    return(
                        <li>{value}</li>
                    )
                })}

                </ul>
                

            </div>
        </>
     );
}

export default AppDetails;