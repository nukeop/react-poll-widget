import ProgressIndicator from "../components/ProgressIndicator";
import { createSnapshotTest } from "./utils";

createSnapshotTest(ProgressIndicator, {}, 'Empty');
createSnapshotTest(ProgressIndicator, {
  step: 1,
  stepsTotal: 2
}, 'Half');