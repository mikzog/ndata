export const WIDGET_TYPE = {
  SOURCE: 'SOURCE',
  TARGET: 'TARGET',
  TRANSFORM: 'TRANSFORM',
};

export const WIDGETS = [
  {
    icon: '',
    name: 'Rest',
    code: 'rest',
    type: WIDGET_TYPE.SOURCE,
  },
  {
    icon: '',
    name: 'S3',
    code: 's3',
    type: WIDGET_TYPE.SOURCE,
  },
  {
    icon: '',
    name: 'RedShift',
    code: 'redshift',
    type: WIDGET_TYPE.SOURCE,
  },
  {
    icon: '',
    name: 'RDS',
    code: 'rds',
    type: WIDGET_TYPE.SOURCE,
  },
  {
    icon: '',
    name: 'SAP',
    code: 'sap',
    type: WIDGET_TYPE.SOURCE,
  },
  {
    icon: '',
    name: 'Split',
    code: 'split',
    type: WIDGET_TYPE.TRANSFORM,
  },
  {
    icon: '',
    name: 'If/Then',
    code: 'condition',
    type: WIDGET_TYPE.TRANSFORM,
  },
  {
    icon: '',
    name: 'S3',
    code: 's3-target',
    type: WIDGET_TYPE.TARGET,
  },
  {
    icon: '',
    name: 'RedShift',
    code: 'redshift-target',
    type: WIDGET_TYPE.TARGET,
  },
  {
    icon: '',
    name: 'RDS',
    code: 'rds-target',
    type: WIDGET_TYPE.TARGET,
  },
];
