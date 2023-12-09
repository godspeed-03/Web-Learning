// File: FetchDatabyQuery.ts
import { Users } from "../interface/interface";

const baseurl = 'https://api.pexels.com/v1/';
const apikey = 'w66iKT1LBq0iS8JizlkrFongmhLcheuQZ7gTKwDDDUp7c35MklAdnx7q';

const FetchDatabyQuery = async (query: string | null): Promise<Users> => {
  // console.log(query);

  try {
    const headers = {
      Authorization: apikey,
    };

    if (query) {
      const response = await fetch(`${baseurl}search?query=${query}&per_page=40`, { headers });

      if (!response.ok) {
        throw new Error("Data can't be fetched error...");
      }

      const data: Users = await response.json();
      // console.log(data);
      return data;
    } else {
      const response = await fetch(`${baseurl}curated`, { headers });

      if (!response.ok) {
        throw new Error("Data can't be fetched error...");
      }

      const data: Users = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error in FetchDatabyQuery:", error);
    throw error;
  }
};

export default FetchDatabyQuery;
