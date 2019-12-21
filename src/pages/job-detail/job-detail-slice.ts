import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DesignSchema {
  name: string;
  type: string;
}

export interface DesignProperty {
  area?: string;
  name: string;
  value: string;
}

export interface DesignAction {
  name: string;
  type: string;
  code: string;
}

interface JobDetailState {
  name: string;
  state: string;
  selectedAction?: string;
  actions: DesignAction[];
  schema: {
    [actionName: string]: DesignSchema;
  };
  properties: {
    [actionName: string]: DesignProperty;
  };
}

let initialState: JobDetailState = {
  name: 'Job Name',
  state: 'Design',
  actions: [],
  selectedAction: undefined,
  schema: {},
  properties: {},
};

const jobDetailSlice = createSlice({
  name: 'jobDetail',
  initialState,
  reducers: {
    setAction(state, action: PayloadAction<DesignAction>) {
      state.actions = state.actions.concat(action.payload);
      state.selectedAction = action.payload.code;
    },
    setSelectedAction(state, action: PayloadAction<undefined | string>) {
      state.selectedAction = action.payload;
    },
  },
});

export const { setAction, setSelectedAction } = jobDetailSlice.actions;

export default jobDetailSlice.reducer;
