export const WIDGET_CATEGORY = {
  SOURCE: 'SOURCE',
  TARGET: 'TARGET',
  TRANSFORM: 'TRANSFORM',
};

export const WIDGETS = [
  {
    icon: '',
    name: 'Rest',
    type: 'rest',
    category: WIDGET_CATEGORY.SOURCE,
  },
  {
    icon: '',
    name: 'S3',
    type: 's3',
    category: WIDGET_CATEGORY.SOURCE,
  },
  {
    icon: '',
    name: 'Transform',
    type: 'transform',
    category: WIDGET_CATEGORY.TRANSFORM,
  },
  {
    icon: '',
    name: 'S3',
    type: 's3-target',
    category: WIDGET_CATEGORY.TARGET,
  },
];
