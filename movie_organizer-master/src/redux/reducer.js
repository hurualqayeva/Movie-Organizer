const initState = {
    movies: [],
    listMovies: [],
  };
  
  export default function reduser(state = initState, action) {
    if (action.type === "ADD_TO_MOVIE") {
      const newMovie = state.movies.find(
        (item) => item.imdbID === action.payload.id
      );
      const listMovies = [...state.listMovies, { ...newMovie }];
      return {
        ...state,
        listMovies,
      };
    }
    if(action.type === "REMOVE_TO_MOVIE") {
      const filterMovie = state.listMovies.filter((item) => item.imdbID !== action.payload.id);
      return {
        ...state,
        listMovies: filterMovie,
      };
    }
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "ADD_MOVIES":
        return {
          ...state,
          movies: [...action.payload.movies],
        };
    }
    return state;
  }
  