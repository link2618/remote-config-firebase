import { fetchAndActivate, getValue } from "firebase/remote-config";

// import { remoteConfigAdmin } from "./admin";
import remoteConfig from "./config";

const remote_config = {}

remote_config.get = async (type) => {
    let data
    let error
    
    await fetchAndActivate(remoteConfig)
    .then(() => {
        // fetched configs successfully activate
        data = getValue(remoteConfig, type)
    })
    .catch(err => {
        // fetched configs were activate activate
        error = err
        console.error(err);
    });

    if(data) {
        return data._value;
    } else {
        return `{"error": "${error}"}`
    }
    
}

// remote_config.listAllVersions = async () => {
//   console.log('variable 1', process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS)
//   console.log('variable 2 ', process.env.GOOGLE_APPLICATION_CREDENTIALS)
//     await remoteConfigAdmin.remoteConfig().listVersions()
//     .then((listVersionsResult) => {
//       console.log("Successfully fetched the list of versions");
//       listVersionsResult.versions.forEach((version) => {
//         console.log('version', JSON.stringify(version));
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

export default remote_config;