/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from "react";
import star from './images/icon-star.svg'
import phone from './images/illustration-thank-you.svg'
import './css/main.css';


let Main = ()=>{

    let [submited,useSubmitted] = useState(false)
    let [activecheck1, useActivecheck1] = useState(false)
    let [activecheck2, useActivecheck2] = useState(false)
    let [activecheck3, useActivecheck3] = useState(false)
    let [activecheck4, useActivecheck4] = useState(false)
    let [activecheck5, useActivecheck5] = useState(false)
    let [rated,useRated] = useState()


    let checked1 = ()=>{
        useActivecheck2(false)
        useActivecheck3(false)
        useActivecheck4(false)
        useActivecheck5(false)
        if(activecheck1){
            useActivecheck1(false)
        }else{
            useActivecheck1(true)
        }
    }
    let checked2 = e=>{
        useActivecheck1(false)
        useActivecheck3(false)
        useActivecheck4(false)
        useActivecheck5(false)
        if(activecheck2){
            useActivecheck2(false)
        }else{
            useActivecheck2(true)
        }
    }

    let checked3 = e=>{
        useActivecheck1(false)
        useActivecheck2(false)
        useActivecheck4(false)
        useActivecheck5(false)
        if(activecheck3){
            useActivecheck3(false)
        }else{
            useActivecheck3(true)
        }
    }

    let checked4 = e=>{
        useActivecheck1(false)
        useActivecheck2(false)
        useActivecheck3(false)
        useActivecheck5(false)
        if(activecheck4){
            useActivecheck4(false)
        }else{
            useActivecheck4(true)
        }
    }

    let checked5 = e=>{
        useActivecheck1(false)
        useActivecheck2(false)
        useActivecheck3(false)
        useActivecheck4(false)
        if(activecheck5){
            useActivecheck5(false)
        }else{
            useActivecheck5(true)
        }
    }



    let handleSubmit = e=>{
        e.preventDefault()
        useSubmitted(true)
    }

    return(
        <>
            {submited?
            
            <article className="main-container">
                <div className="main-image">
                    <img src={phone} alt="" />
                </div>
                <div className="main-selected">
                    <p>You seleceted {rated} out of 5</p>
                </div>
                <div className="main-title">
                    <h1>Thank you!</h1>
                </div>
                <div className="main-desc">
                    <p>We appreciated you taking the take to give a rating. If you ever need more support, don't hesitate to get in touch.</p>
                </div>
            </article>
            :
            <article className="main-container">
                <div className="main-star">
                    <img src={star} alt="" />
                </div>
                <div className="main-question">
                    <h1>How did we do? </h1>
                </div>
                <div className="main-answer">
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>
                <form action="" className="main-ratings-form" onSubmit={handleSubmit}>
                    <div className="main-ratings">
                        <a className={activecheck1?'active':''} onClick={()=>{
                            useRated(1)
                            checked1()
                            }}>1</a>
                        <a className={activecheck2?'active':''} onClick={()=>{
                            useRated(2)
                            checked2()                            
                            } }>2</a>
                        <a className={activecheck3?'active':''} onClick={()=>{
                            useRated(3)
                            checked3()                            
                            }}>3</a>
                        <a className={activecheck4?'active':''} onClick={()=>{
                            useRated(4)
                            checked4()                            
                            }}>4</a>
                        <a className={activecheck5?'active':''} onClick={()=>{
                            useRated(5)
                            checked5()                            
                            }}>5</a>
                    </div>
                    <div className="main-submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </article>
            }

        </>
    )

};


export default Main;