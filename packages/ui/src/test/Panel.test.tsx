import Panel from "../components/Panel";
import { createSnapshotTest } from "./utils";

createSnapshotTest(Panel, {}, 'Empty panel')
createSnapshotTest(Panel, { hasFooter: true }, 'Panel with footer')
createSnapshotTest(
  Panel, 
  {
    color: 'blue',
    hasHeader: true, 
    hasFooter: true,
    headerContent: 'Snapshot test header'
  }, 
  'Panel with header'
  )
createSnapshotTest(
  Panel,
  {
    color: 'blue',
    hasHeader: true,
    hasFooter: true,
    hasSteps: true,
    headerContent: 'Snapshot test header',
    step: 2,
    stepsTotal: 5
  },
  'Panel with step indicator'
)
