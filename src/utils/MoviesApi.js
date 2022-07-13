import { MOVIES_API } from "./constants";

const getAllMovies = async () => {
    try {
        const response = await fetch(`${MOVIES_API}/beatfilm-movies`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }
        )
        return await response.json();
    } catch(err) {
        console.log(`Ошибка ${err.status}`);
    }
}

export default getAllMovies;
