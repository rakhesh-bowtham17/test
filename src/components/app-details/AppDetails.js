import { AppConstants } from "../../constants/app-constants";
import styles from "./AppDetails.module.scss"


function AppDetails() {
    return ( 
        <>
            <div className={styles["app-details"]}>
                <h1>{AppConstants.APP_DETAILS.LABEL}</h1>
                <h3>{AppConstants.APP_DETAILS.APP_VERSION.LABEL}</h3>
                <p>{AppConstants.APP_DETAILS.APP_VERSION.VERSION}</p>
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