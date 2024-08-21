import { defineStore } from 'pinia'
import axios from 'axios'
import apiResponce from '../api/api'


const MebelStore = defineStore('mebel',{
    state: ()=>({
        cabinets: [],
        categories: [],
        tovar: [],
        totalItemsCabinets: 1
    }),
    getters: {
    },
    actions:{
        async setCabinets(page,){
            const {data, totalItems} = await apiResponce.getCabinets(page)        
            this.cabinets = data
            this.totalItemsCabinets = totalItems
        },
        async setCategories(page='1'){
            const {data, totalItems} = await apiResponce.getCategories(page)        
            this.cabinets = data
            this.totalItemsCabinets = totalItems
        },
        setFindTovar(api_name, id){
            axios.get(`http://127.0.0.1:8000/api/${api_name}/${id}`)
            .then(response =>{
                console.log(response.data)
                this.tovar = response.data
            })
        }
    }
})
export default MebelStore