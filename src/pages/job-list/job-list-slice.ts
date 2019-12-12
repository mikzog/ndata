import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Job {
  id: string;
  name: string;
  source: string;
  status: 'pending' | 'running' | 'completed';
  created_at: string;
  updated_at: string;
}

type JobListState = {
  page: number;
  jobs: Job[];
};

let initialState: JobListState = {
  page: 1,
  jobs: [],
};

const jobListSlice = createSlice({
  name: 'jobList',
  initialState,
  reducers: {
    setJobs(state, action: PayloadAction<Job[]>) {
      state.jobs = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setJobs, setCurrentPage } = jobListSlice.actions;

export default jobListSlice.reducer;
