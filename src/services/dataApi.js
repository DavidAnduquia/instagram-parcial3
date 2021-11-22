import axios from 'axios'; 

const query = 'Person';
const url = 'https://api.pexels.com/v1/search?query';
const authorization = '563492ad6f91700001000001ea5add1fe2804a77b6a31bc2ed98cfc4';
const per_page = 50;

let consulta = async () => await axios.get(`${url}=${query}&page=2&per_page${per_page}`, { headers:{ authorization }} );

export default consulta;
