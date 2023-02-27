import { call, put, select, takeLatest } from "typed-redux-saga";
import { ActionFromCreator } from "@typings/general";

import { actions } from "../actions";
import { CharacterApiDomain } from "@services/index";
import { RootState } from "@state/reducers";

export function* characterSagas() {
  yield* takeLatest(actions.character.getCharacters.type, getCharacters);
}

function* getCharacters({
  payload: { page },
}: ActionFromCreator<typeof actions.character.getCharacters>) {
  yield* put(actions.character.setLoading({ isLoading: true }));
  try {
    const characters = yield* call(CharacterApiDomain.getPage, {
      page,
    });

    yield* put(
      actions.character.setCharacters({
        currentCharacters: characters.results,
        currentPage: page,
        isNextPage: !!characters.next,
      })
    );
  } catch (e) {
    console.log(e);
  } finally {
    yield* put(actions.character.setLoading({ isLoading: false }));
  }
}
