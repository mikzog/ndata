import { S3Icon, RESTIcon, ScriptIcon } from 'assets/img/widget';

export const WIDGET_CATEGORY = {
  SOURCE: 'SOURCE',
  TARGET: 'TARGET',
  TRANSFORM: 'TRANSFORM',
};

export const WIDGETS = [
  {
    icon: RESTIcon,
    name: 'REST',
    title: 'REST - drag to the design area',
    type: 'rest',
    category: WIDGET_CATEGORY.SOURCE,
  },
  {
    icon: S3Icon,
    name: 'S3',
    title: 'S3 - drag to the design area',
    type: 's3',
    category: WIDGET_CATEGORY.SOURCE,
  },
  {
    icon: ScriptIcon,
    name: 'Transform',
    title: 'REST - drag to the design area',
    type: 'transform',
    category: WIDGET_CATEGORY.TRANSFORM,
  },
  {
    icon: S3Icon,
    name: 'S3',
    title: 'REST - drag to the design area',
    type: 's3-target',
    category: WIDGET_CATEGORY.TARGET,
  },
];
