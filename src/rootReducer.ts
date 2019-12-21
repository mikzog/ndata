import { combineReducers } from '@reduxjs/toolkit';
import jobListReducer from 'pages/job-list/job-list-slice';
import jobDetailReducer from 'pages/job-detail/job-detail-slice';

const rootReducer = combineReducers({
  jobList: jobListReducer,
  jobDetail: jobDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
