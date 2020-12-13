import { createAsyncAction } from "typesafe-actions";
import { Poll } from "@react-poll-widget/core/src/models/polls";

import { Polls } from "../consts/actionTypes";

export const fetchAllPolls = createAsyncAction(
  Polls.FETCH_ALL_POLLS,
  Polls.FETCH_ALL_POLLS_OK,
  Polls.FETCH_ALL_POLLS_ERROR
)<undefined, Poll[], Error>();