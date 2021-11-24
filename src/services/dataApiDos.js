import axios from 'axios'; 


const authorization = '563492ad6f91700001000001ea5add1fe2804a77b6a31bc2ed98cfc4';


let consultaMenor = async () => await axios.get('https://api.pexels.com/v1/curated?page=1&per_page=4', { headers:{ authorization }} );

export default consultaMenor;