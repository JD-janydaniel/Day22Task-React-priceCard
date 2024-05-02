import React from "react";
import "./Card.css";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Card = ({ data }) => {
  return (
    <>
      <div className="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data.map((data, index) => {
          return (
            <>
              <div key={index}>
                <div class="col">
                  <div class="card rounded-4 h-100">
                    <div className="text-center pt-4">
                    <div class="card-subtitle  fs-5 fw-medium" style={{color:"lightgray"}}>{data.planName}</div>
                    <div class="card-title fw-bold fs-1">${data.price}/month</div>
                    </div>
                    <hr></hr>
                   <div class="card-body">
                   <ul class="list-unstyled ">
                   {data.features.map((feature,index)=>{
                        return(
                            <>
                            <li key={index} class="p-2">
                                {feature.enabled ? (
                                    <span class="fs-5 fw-medium">
                                        <FaCheck size={13} /> {feature.name}
                                    </span>
                                ) : (
                                    <>
                                    <span class="fs-5  fw-mediun" style={{color:"lightgray"}}>
                                    
                                    <ImCross size={13}/> {feature.name}
                                    </span>
                                    </>
                                )}
                            </li>
                            </>
                        )
                    })}
                   </ul>
                    <button
                      type="button"
                      class="w-100  btn rounded-5 btn-lg btn-primary"
                    >BUTTON</button>
                   </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Card;
