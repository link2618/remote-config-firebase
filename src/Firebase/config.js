import { initializeApp } from "firebase/app";
import { getRemoteConfig } from "firebase/remote-config";

import { defaultConfig } from "./defaultValues";
import { firebaseConfig } from "./variables";

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(firebase);
remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

// Value default 
remoteConfig.defaultConfig = defaultConfig;

export default remoteConfig;