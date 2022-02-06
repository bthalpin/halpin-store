import React,{ useState } from 'react';
import Department from './Department';
import './Departments.css';
import HalpinElectronics from '../../images/HalpinElectronics.jpg';

const Departments = ({storeDepartment,setCategory,setHome})=>{
    console.log(storeDepartment)
    const changeDepartment = (department) =>{
        setCategory(department)
        // setHome(false)
    }
    return(
        <div className = "mainDepartment">
            <div className = "Departments">
            <div className = "mainAd"><img className = "mainadimg" src={HalpinElectronics} ></img></div>
            </div>
            <div className = "Departments">
        {storeDepartment?
        storeDepartment.map((department)=>{
            return <Department department = {department} changeDepartment = {changeDepartment} />
        }):<></>}
            {/* <div className = "ad"><img className = "adimg" src="https://wwd.com/wp-content/uploads/2020/09/kohls-lands-end-in-store.jpg" ></img></div>
            <div className = "ad"><img className = "adimg" src="https://www.retailwire.com/wp-content/uploads/2017/03/kohls-sonoma-apparel-interior-666x333.jpg" ></img></div>
            <div className = "ad"><img className = "adimg" src="https://s.wsj.net/public/resources/images/CS-AA689_KOHLS__M_20181029115022.jpg" ></img></div>
            <div className = "ad"><img className = "adimg" src="https://thumbs.dreamstime.com/b/rugs-shelves-home-goods-store-rugs-shelves-home-goods-store-207030544.jpg" ></img></div>
            <div className = "ad"><img className = "adimg" src="https://thumbs.dreamstime.com/b/rugs-shelves-home-goods-store-rugs-shelves-home-goods-store-207030544.jpg" ></img></div>
            <div className = "ad"><img className = "adimg" src="https://thumbs.dreamstime.com/b/rugs-shelves-home-goods-store-rugs-shelves-home-goods-store-207030544.jpg" ></img></div>
            <div className = "ad"><img className = "adimg" src="https://thumbs.dreamstime.com/b/rugs-shelves-home-goods-store-rugs-shelves-home-goods-store-207030544.jpg" ></img></div>
            <div className = "ad"><img className = "adimg" src="https://thumbs.dreamstime.com/b/rugs-shelves-home-goods-store-rugs-shelves-home-goods-store-207030544.jpg" ></img></div> */}
            
            </div>
            <div  className = "Footer">
                Contact
            </div>
        </div>
        
    )    
}
    

export default Departments;