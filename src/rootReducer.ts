import { combineReducers } from '@reduxjs/toolkit';
import jobListReducer from 'pages/job-list/job-list-slice';

const rootReducer = combineReducers({
  jobList: jobListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
