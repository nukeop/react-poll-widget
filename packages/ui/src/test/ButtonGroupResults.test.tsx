import ButtonGroupResults from "../components/ButtonGroupResults";
import { createSnapshotTest } from "./utils";

createSnapshotTest(ButtonGroupResults, {
  results: [
    { option: { id: '1', value: '1', label: 'Test 1' }, score: 25 },
    { option: { id: '2', value: '2', label: 'Test 2' }, score: 75 }
  ]
}, 'Right')

createSnapshotTest(ButtonGroupResults, {
  results: [
    { option: { id: '1', value: '1', label: 'Test 1' }, score: 66 },
    { option: { id: '2', value: '2', label: 'Test 2' }, score: 33 }
  ]
}, 'Left')