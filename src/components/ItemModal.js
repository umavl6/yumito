import React,{useContext,useState} from 'react'
import {itemContext} from '../App';

function ItemModal() {
  //console.log("item model rendered");
   const [count,setCount]=useState(0);
    const iL = useContext(itemContext);
    const {items,id,totalItems,list}=iL.state;
    const arrayObj=items.filter(e => e.items.findIndex(a=>a.id===id) !== -1 );
    const display=arrayObj[0].items.filter(a=>a.id===id);  
    const dis=display[0];
    console.log(dis, "arrr");
    const increment=()=>{
        //if(count>=0){ count++};
        if(count>=0){ setCount(p=>p+1)} ;
        iL.method({type:'addCart',payload:dis})
        if(list.length){
            iL.method({type:'getTotalItems'}) 
        }
        
    };
    const decrement=()=>{
        //if(count>0){count--};
        if(count>0){ setCount(p=>p-1)} ;
    }
    return (
        <>
<div className="modal fade" id="itemModal" tabIndex="-1">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <img class="img-fluid modalImg" src="https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_960_720.jpg"/>     
      </div>
      <div class="modal-body d-flex flex-column">
        <div class="fw-bold">{dis.itemName}</div>
         <div>{dis.recipe ?? ''}</div> 
      </div>
      <div class="modal-footer d-flex flex-row justify-content-start">
          <div>Qty</div>
        <div onClick={increment}><i class="bi bi-plus-circle" role="button"></i></div>
        <div>{dis.quantity}</div>
        <div onClick={decrement}><i class="bi bi-dash-circle" role="button"></i></div>
        <div class="ms-auto">&#8377;{`${dis.price}.00`}</div>
      </div>
      <button type="button" class="btn btn-warning m-3">Go to Cart{' '}{`(${totalItems})`}</button>
    </div>
  </div>
</div>
</>
    )
}

export default ItemModal
