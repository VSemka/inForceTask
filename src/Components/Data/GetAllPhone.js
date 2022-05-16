import { useFetch } from "../UseFetch/2-useFetch"

const GetAllPhones = () => {
    const { products } = useFetch("http://localhost:3000/phones");
    return products
}

export default GetAllPhones;