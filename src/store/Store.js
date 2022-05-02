import { configureStore, createSlice } from "@reduxjs/toolkit";

const CountrySlice = createSlice({
  name: "country",
  initialState: {
    isFetching: false,
    countries: [],
    filteredCountries: [],
    isError: false,
    error: null,
  },
  reducers: {
    getCountriesStart(state) {
      state.isFetching = true;
      state.countries = [];
      state.filteredCountries = [];
      state.isError = false;
      state.error = null;
    },
    getCountriesSuccess(state, action) {
      state.isFetching = false;
      let countries = action.payload.res;
      state.countries = countries.sort((a, b) =>
        a.name.common > b.name.common
          ? 1
          : b.name.common > a.name.common
          ? -1
          : 0
      );
      state.isError = false;
      state.error = null;
    },
    getCountriesFailure(state, action) {
      state.isFetching = false;
      state.countries = [];
      state.isError = true;
      state.error = action.payload.err;
    },
    setFilteredCountries(state, action) {
      let { continent } = action.payload;
      if (continent === "all") {
        state.filteredCountries = [];
      } else {
        state.filteredCountries = state.countries.filter(
          (country) => country.continents[0] === continent
        );
      }
    },
  },
});

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    registerUser(state, action) {
      state.user = action.payload.username;
      localStorage.setItem("user", state.user);
    },
    loginUser(state, action) {
      state.user = action.payload.username;
      localStorage.setItem("user", state.user);
    },
    logoutUser(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const CountryActions = CountrySlice.actions;
export const AuthActions = AuthSlice.actions;

const store = configureStore({
  reducer: {
    country: CountrySlice.reducer,
    auth: AuthSlice.reducer,
  },
});

export default store;
