import PollButtonGroup from "../components/PollButtonGroup";
import { createSnapshotTest } from "./utils";

createSnapshotTest(PollButtonGroup, {
  options: [
    { id: '1', value: 'Yes', label: 'Yes' },
    { id: '2', value: 'No', label: 'No' }
  ],
  onSelect: () => {}
}, 'Yes/No')

createSnapshotTest(PollButtonGroup, {
  options: [
    { id: '1', value: 'Yes', label: 'Yes' },
    { id: '2', value: 'No', label: 'No' }
  ],
  onSelect: () => { },
  loading: true
}, 'Loading')