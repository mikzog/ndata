import _get from 'lodash/get';
import _set from 'lodash/set';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import S3_META from 'meta/s3.json';
import REST_META from 'meta/s3.json';
import TRANSFORM_META from 'meta/s3.json';

const DEFAULT_ENTITY_DATA: any = {
  s3: S3_META,
  rest: REST_META,
  transform: TRANSFORM_META,
};

export interface IAction {
  name: string;
  type: string;
  category: string;
}

export interface ISchema {
  name: string;
  type: string;
}

export interface IAttribute {
  name: string;
  value: string;
}

export interface IProperty {
  area?: string;
  attributes: IAttribute[];
}

export interface IEntity {
  id: string;
  type: string;
}

interface JobDetailState {
  name: string;
  state: string;
  entities: {
    [id: string]: string;
  };
  data: {
    [id: string]: {
      schema: ISchema;
      properties: IProperty;
      script: string;
    };
  };
  selectedEntityId?: string;
}

let initialState: JobDetailState = {
  name: 'Job Name',
  state: 'Design',
  entities: {},
  data: {},
  selectedEntityId: undefined,
};

const jobDetailSlice = createSlice({
  name: 'jobDetail',
  initialState,
  reducers: {
    setEntity(state, action: PayloadAction<IEntity>) {
      state.entities = {
        ...state.entities,
        [action.payload.id]: action.payload.type,
      };
      state.data = {
        ...state.data,
        [action.payload.id]: DEFAULT_ENTITY_DATA[action.payload.type],
      };
      state.selectedEntityId = action.payload.id;
    },
    setEntityData(state, action: PayloadAction<{ path: string; value: any }>) {
      const path = `${state.selectedEntityId}.${action.payload.path}`;
      const currentAttr = _get(state.data, path);
      const newAttr = { ...currentAttr, ...action.payload.value };

      state.data = _set(state.data, path, newAttr);
    },
    setSelectedEntityId(state, action: PayloadAction<undefined | string>) {
      state.selectedEntityId = action.payload;
    },
    removeSelectedEntity(state, action: PayloadAction<string>) {
      delete state.entities[action.payload];
      delete state.data[action.payload];
    },
  },
});

export const {
  setEntity,
  setEntityData,
  setSelectedEntityId,
  removeSelectedEntity,
} = jobDetailSlice.actions;

export default jobDetailSlice.reducer;
