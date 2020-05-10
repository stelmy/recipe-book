import {Ingredient} from '../../shared/ingredient.model';
import {
  ADD_INGREDIENT,
  ADD_INGREDIENTS,
  AddIngredient,
  AddIngredients,
  DELETE_INGREDIENT,
  ShoppingListAction,
  START_EDIT,
  StartEdit,
  STOP_EDIT,
  UPDATE_INGREDIENT,
  UpdateIngredient
} from './shopping-list.actions';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(
  state: State = initialState,
  action: ShoppingListAction
) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return getAddIngredientState(state, action as AddIngredient);
    case ADD_INGREDIENTS:
      return getAddIngredientsState(state, action as AddIngredients);
    case UPDATE_INGREDIENT:
      return getUpdateIngredientState(state, action as UpdateIngredient);
    case DELETE_INGREDIENT:
      return getDeleteIngredientState(state);
    case START_EDIT:
      return getStartEditState(state, action as StartEdit);
    case STOP_EDIT:
      return getStopEditState(state);
    default:
      return state;
  }
}

function getAddIngredientState(state, action: AddIngredient) {
  return {
    ...state,
    ingredients: [...state.ingredients, action.payload]
  };
}

function getAddIngredientsState(state, action: AddIngredients) {
  return {
    ...state,
    ingredients: [...state.ingredients, ...action.payload]
  };
}

function getUpdateIngredientState(state, action: UpdateIngredient) {
  const index = state.editedIngredientIndex;
  const ingredient = state.ingredients[state.editedIngredientIndex];
  const updatedIngredient = {
    ...ingredient,
    ...action.payload
  };
  const updatedIngredients = [...state.ingredients];
  updatedIngredients[index] = updatedIngredient;
  return {
    ...state,
    ingredients: updatedIngredients,
    editedIngredientIndex: -1,
    editedIngredient: null
  };
}

function getDeleteIngredientState(state) {
  return {
    ...state,
    ingredients: state.ingredients
      .filter((ingredient, index) => {
        return index !== state.editedIngredientIndex;
      }),
    editedIngredientIndex: -1,
    editedIngredient: null
  };
}

function getStartEditState(state, action: StartEdit) {
  return {
    ...state,
    editedIngredientIndex: action.payload,
    editedIngredient: { ...state.ingredients[action.payload] }
  };
}

function getStopEditState(state) {
  return {
    ...state,
    editedIngredientIndex: -1,
    editedIngredient: null
  };
}
