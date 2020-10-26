import TextAreaPoll from "../components/TextAreaPoll";
import { createSnapshotTest } from "./utils";

createSnapshotTest(TextAreaPoll, {}, 'Text area poll')
createSnapshotTest(TextAreaPoll, { loading: true }, 'Loading text area poll')
createSnapshotTest(TextAreaPoll, { error: 'Error' }, 'Text area poll with error')