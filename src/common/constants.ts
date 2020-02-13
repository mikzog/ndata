import {
  AggregateIcon,
  RDSIcon,
  S3Icon,
  RESTIcon,
  ScriptIcon,
  SAPIcon,
  IfThenIcon,
  RedShiftIcon,
  SplitIcon,
} from 'assets/img/widget';

export const WIDGET_CATEGORY = {
  SOURCE: 'SOURCE',
  MAPPING: 'MAPPING',
  TRANSFORM: 'TRANSFORM',
};

export const WIDGETS = [
  {
    icon: RESTIcon,
    name: 'REST',
    title: 'REST - Source',
    type: 'rest',
    category: WIDGET_CATEGORY.SOURCE,
  },
  {
    icon: S3Icon,
    name: 'S3',
    title: 'S3 - Source',
    type: 's3',
    category: WIDGET_CATEGORY.SOURCE,
  },
  {
    icon: RedShiftIcon,
    name: 'RedShift',
    title: 'RedShift - Source',
    type: 'redshift',
    category: WIDGET_CATEGORY.SOURCE,
  },
  {
    icon: RDSIcon,
    name: 'RDS',
    title: 'RDS - Source',
    type: 'rds',
    category: WIDGET_CATEGORY.SOURCE,
  },
  {
    icon: SAPIcon,
    name: 'SAP',
    title: 'SAP - Source',
    type: 'sap',
    category: WIDGET_CATEGORY.SOURCE,
  },
  {
    icon: ScriptIcon,
    name: 'Script',
    title: 'Script - Transform',
    type: 'script',
    category: WIDGET_CATEGORY.TRANSFORM,
  },
  {
    icon: SplitIcon,
    name: 'Split',
    title: 'Split - Transform',
    type: 'split',
    category: WIDGET_CATEGORY.TRANSFORM,
  },
  {
    icon: IfThenIcon,
    name: 'If/Then',
    title: 'If/Then - Transform',
    type: 'if',
    category: WIDGET_CATEGORY.TRANSFORM,
  },
  {
    icon: AggregateIcon,
    name: 'Aggregate',
    title: 'Aggregate - Transform',
    type: 'aggregate',
    category: WIDGET_CATEGORY.TRANSFORM,
  },
  {
    icon: S3Icon,
    name: 'S3',
    title: 'S3 - Mapping',
    type: 's3',
    category: WIDGET_CATEGORY.MAPPING,
  },
  {
    icon: RedShiftIcon,
    name: 'RedShift',
    title: 'RedShift - Mapping',
    type: 'redshift',
    category: WIDGET_CATEGORY.MAPPING,
  },
  {
    icon: RDSIcon,
    name: 'RDS',
    title: 'RDS - Mapping',
    type: 'rds',
    category: WIDGET_CATEGORY.MAPPING,
  },
];
