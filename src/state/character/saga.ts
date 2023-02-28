import { call, put, select, takeLatest } from "typed-redux-saga";
import { ActionFromCreator } from "@typings/general";

import { actions } from "../actions";
import { CharacterApiDomain } from "@services/index";
import { RootState } from "@state/reducers";

export function* characterSagas() {
  yield* takeLatest(actions.character.getCharacters.type, getCharacters);
  yield* takeLatest(actions.character.getCharacterById.type, getCharacterById);
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
        characters: characters.results,
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

function* getCharacterById({
  payload: { id },
}: ActionFromCreator<typeof actions.character.getCharacterById>) {
  yield* put(actions.character.setLoading({ isLoading: true }));
  try {
    const character = yield* call(CharacterApiDomain.getById, {
      id,
    });

    yield* put(
      actions.character.setCurrentCharacter({
        character,
      })
    );
  } catch (e) {
    console.log(e);
  } finally {
    yield* put(actions.character.setLoading({ isLoading: false }));
  }
}
