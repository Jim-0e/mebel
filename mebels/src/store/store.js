import { defineStore } from 'pinia'
import axios from 'axios'

const MebelStore = defineStore('mebel',{
    state: ()=>({
        cabinets: [],
        categories: [],
        tovar: [],
    }),
    getters: {
    },
    actions:{
        setCabinets(page='1'){
            axios.get('http://127.0.0.1:8000/api/cabinets/',`?page${page}`)
            .then(response => {
                console.log(response.data)
                const data = response.data
                this.cabinets = data['results']
            })
        },
        setCategories(page='1'){
            axios.get('http://127.0.0.1:8000/api/categories/',`?page${page}`)
            .then(response => {
                console.log(response.data)
                const data = response.data
                this.categories = data['results']
                
            })
        },
        setTovarId(api_name, id){
            axios.get(`http://127.0.0.1:8000/api/${api_name}/${id}`)
            .then(response =>{
                console.log(response.data)
                this.tovar = response.data
            })
        }
    }
})
export default MebelStore