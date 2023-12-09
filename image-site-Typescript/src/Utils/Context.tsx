// File: AppContext.tsx
import { createContext,  useReducer, useEffect, useContext } from 'react';
import reducer from './reducer';
import FetchDatabyQuery from './API';
import {QueryState,  AppContextType, ProviderProps} from '../interface/interface';


const initialState: QueryState = {
  query: '',
  photo: [],
  
};


const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchApiData = async () => {
    try {
      const result = await FetchDatabyQuery(state.query);
      // console.log(result)
      dispatch({
        type: "Get_Stories",
        payload: {
          photo: result.photos,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removepost = (photoid: number) => {
    dispatch({
      type: "remove_post",
      payload: photoid,
    });
  };

  const searchpost = (searchquery: string) => {
    dispatch({
      type: "Searchpost",
      payload: searchquery,
    });
  };

  useEffect(() => {
    fetchApiData();
  }, [state.query]);

  // console.log(state)

  return (
    <AppContext.Provider value={{ ...state, removepost, searchpost }as AppContextType}>
      {children}
    </AppContext.Provider>
  );
};

// console.log(typeof AppContext)

 const useApiData = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApiData must be used within an AppProvider');
  }
  return context;
};

export { AppContext, AppProvider, useApiData };
