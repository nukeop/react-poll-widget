import RadioPoll from "../components/RadioPoll";
import { createSnapshotTest } from "./utils";

createSnapshotTest(RadioPoll, {
  options: [
    { id: '1', label: 'Test 1', value: '1' },
    { id: '2', label: 'Test 2', value: '2' },
    { id: '3', label: 'Test 3', value: '3' }
  ]
}, 'Basic')