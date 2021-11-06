import React,{useContext} from 'react'
import {itemContext} from '../App';

function MenuCard({data}) {
    //console.log("menucard rendered");
    const iL = useContext(itemContext);
    
    const sendId=(id)=>{
        iL.method({type:'set_id',payload:id});
    }

    const increment=()=>{
        iL.method({type:'addItem',payload:data})
        iL.method({type:'getTotalItems'})           
    };
   

    const colorCircle = data.vegan.toLowerCase() ==="veg" ? <i className="bi bi-circle-fill greenColor"></i> :
    data.vegan.toLowerCase() ==="egg" ? <i className="bi bi-circle-fill yellowColor"></i> : <i className="bi bi-circle-fill redColor"></i>
    
    return (
        <>
       <div key ={data.id} className="menuCard d-flex justify-content-between flex-wrap" onClick={()=>sendId(data.id)}>
           <div className="d-flex flex-column itemDescription">
               <div>
               <div className="h5">{data.itemName}</div>
               <div>{colorCircle}{' '}{data.vegan}</div>
               <div>{data.description?? ''}</div>
               </div>
               <div className="py-2">&#8377;{`${data.price}.00`}</div>
                <button type="button" className="btn btn-outline-warning mt-auto p-2 w-50 addCart" onClick={increment}>Add to cart</button>
    </div>
           <div className="menuCardImg position-relative">
               
               <img alt="" className="img-fluid img-rounded" src={data.img?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVua1higrnAKxEJ8ufI9iIJ8Y3_-DGUBEoA&usqp=CAU"}/>
               {data.tag !=="" ? <span className="position-absolute top-0 end-0 bg-primary badge" style={{padding:"5px"}}>{data.tag}</span> : ''}
           </div>
       </div>
       
      </>
    )
}

export default React.memo(MenuCard);
