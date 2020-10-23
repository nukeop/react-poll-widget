import { createSnapshotTest } from "./utils";
import Checkbox from '../components/Checkbox';

createSnapshotTest(
  Checkbox, 
  {
    checked: true,
    label: 'Test'
  },
  'Checkbox'
  )

createSnapshotTest(
  Checkbox,
  {
    type: 'radio',
    checked: true,
    label: 'Test'
  },
  'Radio checkbox'
)