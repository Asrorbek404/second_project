import React,{Component} from 'react';
import './App.css';
import Filter from "./Filter";
import {Data} from './data';
import Products from "./Products";
import {SliderData} from "./Component/ImageData";
import ImageSlider from "./Component/ImageSlider";
 export  default class App extends Component{
     constructor(){
        super();
        this.state={
          products:localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):Data,
            sort:localStorage.getItem('sort')?JSON.parse(localStorage.getItem('sort')):'',
            cart:''

        }
     }

     sorting =(e)=> {

         const sorting = e.target.value;
         const sortRes = this.state.products.sort((a, b) => {
                 if (sorting === 'all') {
                     return a.id > b.id ? 1 : -1

                 }
                 if (sorting === 'low') {
                     return a.price > b.price ? 1 : -1
                 }
                 if (sorting === 'high') {
                     return a.price < b.price ? 1 : -1
                 }
             }
         )

         this.setState({
             sort: sorting,

             products: sortRes
         },()=>{
           localStorage.setItem('sort',JSON.stringify(this.state.sort));
           localStorage.setItem('data',JSON.stringify(this.state.products))
         })
     }


     filteringName = (e) =>{
         let categ = e.target.value;
         if(categ ===''){
             this.setState({
         cat:categ,
         products:Data
             }

     )}
       else{
           this.setState({
               cat:categ,
               products:Data.filter(product=>{
                   return product.category.indexOf(e.target.value)>=0
               })
               }
           )
         }
     }
         render(){
    return(
      <div className="App">
         <Filter sorting={this.sorting}
                 sorts={this.state.sort}
         filteringName={this.filteringName}
                 cat={this.state.cat}/>

          <Products products={this.state.products}/>
          <ImageSlider slides={SliderData}/>
          <hr/>
</div>
    )
     }
};
