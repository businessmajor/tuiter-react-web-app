import axios from 'axios';
// const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://tuiter-node-server-app-bobj.onrender.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

const request = axios.create({
    withCredentials: true,
  });  

export const createTuit = async (tuit) => {
    try {
        const response = await axios.post(TUITS_API, tuit);
        return response.data;
    } catch (error) {
        console.error("Error creating tuit:", error);
        throw error;
    }
};

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const updateTuit = async (tuit) => {
    await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}


export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
}