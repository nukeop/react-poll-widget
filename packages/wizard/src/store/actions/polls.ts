import { createAsyncAction } from "typesafe-actions";
import { Poll } from "../../models/polls";
import { Polls } from "../consts/actionTypes";

export const fetchAllPolls = createAsyncAction(
  Polls.FETCH_ALL_POLLS,
  Polls.FETCH_ALL_POLLS_OK,
  Polls.FETCH_ALL_POLLS_ERROR
)<undefined, Poll[], Error>();

export const postPoll = createAsyncAction(
  Polls.POST_POLL,
  Polls.POST_POLL_OK,
  Polls.POST_POLL_ERROR
)<string, Poll, Error>();