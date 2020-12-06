import { createAsyncAction } from "typesafe-actions";
import { Polls } from "../consts/actionTypes";

const fetchAllPolls = createAsyncAction(
  Polls.FETCH_ALL_POLLS,
  Polls.FETCH_ALL_POLLS_OK,
  Polls.FETCH_ALL_POLLS_ERROR
)();

