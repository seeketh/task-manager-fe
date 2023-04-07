// Set constatns here so that we have one-place monagement

export const TASKS_LIMIT_COUNT = 5;
export const LOGIN_URL = process.env.REACT_APP_API_HOST + "/api/v1/auth/login";
export const LOGOUT_URL = process.env.REACT_APP_API_HOST + "/api/v1/auth/logout";
export const REGISTER_URL = process.env.REACT_APP_API_HOST + "/api/v1/auth/logout";
export const ALL_TASKS_URL = process.env.REACT_APP_API_HOST + "/api/v1/task";