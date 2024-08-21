import axios from "axios";


const apiUrl = import.meta.env.VITE_URL_REF


const api = axios.create({
    baseURL: `${apiUrl}`,
    // headers: {
    //   'Authorization': `Bearer ${token}`,
    //    'Accept': 'application/ld+json',
    //    'Content-Type': 'application/json; charset=utf-8',
    // },
  });
  
  
async function axiosRequest(url, page='1', objParams){
        return await api.get(`${apiUrl}${url}`
        + `?page=${page}`, 
       {  
        params: {
          ...objParams
        }
       })
        .then(response => {
               const data = response.data['results'];
               const totalItems = response.data['count']
               return {data, totalItems}
        })
  }
  
  
  
  async function checkRequest(url, page, objParams, message){
        try{
            return await axiosRequest(url, page, objParams, message)
        }catch(err){
            console.error(`Ошибка при запросе к api ${message} - ${err}`)
        }
  }
  
  
  const apiResponce = {
        async getCabinets(page, objParams){
              return await checkRequest('cabinets/', page, objParams, 'шкафам') 
        },
        async getCategories(page, objParams){
              return await checkRequest('categories/', page, objParams, 'категориям') 
        },
        async getSkaphs(page, objParams){
              return await checkRequest('/', page, objParams, 'категориям') 
        },
  
      
  }
  
  export default apiResponce