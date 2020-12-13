import { createReducer, ActionType } from "typesafe-actions";
import produce from 'immer';
import { Poll } from "@react-poll-widget/core/src/models/polls";

import * as actions from '../actions/polls'
import { loadableDefaultState } from "../helpers";
import { Loadable } from "../types";

export class PollsStore {
  polls: Loadable<Poll[]> = loadableDefaultState([]);
};

const initialState = { ...new PollsStore() };

export const pollsReducer = createReducer<PollsStore, ActionType<typeof actions>>(initialState)
  .handleAction(actions.fetchAllPolls.request, (state) => produce(state, draft => {
    draft.polls.isLoading = true;
    draft.polls.isReady = false;
    draft.polls.hasError = false;
  }))
  .handleAction(actions.fetchAllPolls.success, (state, action) => produce(state, draft => {
    draft.polls.isLoading = false;
    draft.polls.isReady = true;
    draft.polls.hasError = false;
    draft.polls.data = action.payload;
  }))
  .handleAction(actions.fetchAllPolls.failure, (state, action) => produce(state, draft => {
    draft.polls.isLoading = false;
    draft.polls.isReady = true;
    draft.polls.hasError = true;
    draft.polls.error = action.payload.message;
    draft.polls.data = undefined;
  }));