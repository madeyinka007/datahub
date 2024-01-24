import { useThemeContext } from "../context/ThemeContext"
import { useReducer } from "react"
import { ACTION_TYPES } from "../types"
import { PlanReducer, QuoteReducer, initial_state, quote_initial } from "../reducer"
import { postData } from "../services"
import Checked from "./svg"


export function PlanSelectModal({open, onClose}){
    const {plan} = useThemeContext()
    const [state, dispatch] = useReducer(PlanReducer, initial_state)

    function handleChange(e){
        dispatch({
            type: ACTION_TYPES.PLAN_FIELD,
            payload: {name: e.target.name, value: e.target.value, "plan":plan}
        })
    }

    function submit(e){
        e.preventDefault()
        dispatch({type:ACTION_TYPES.PLAN_START})
        //console.log(state.data)
        postData('/client', state.data)
        .then((data) => {
            dispatch({type:ACTION_TYPES.PLAN_SUCCESS, payload:data})
        })
        .catch((err) => {
            dispatch({type:ACTION_TYPES.PLAN_ERROR})
        })
    }
    
    if (!open) return null

    return (
        <>        
        <div className="modal-bg">
        { state.success ? 
            <div className="modal-container">
                <div className="modal-container-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="success-pop">
                                    <span><Checked /></span>
                                    <h1 style={{paddingTop:'20px'}}> Thank You!</h1>
                                    <p>Your submission has been recieved. Kindly check your mailbox or spam for further proceedings.</p>
                                    <div className="home-btn">
                                        <button type="button" onClick={onClose} className="btn"><i className="bi bi-house-door" ></i> Back To Site</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="modal-container">
                <div className="modal-container-header">
                    <div className="modal-container-title">
                        <h4>Confirm Your Plan Selection</h4>
                    </div>
                    <span className="icon-button" onClick={onClose}><i className="bi bi-x-circle-fill" style={{fontSize:'24px', marginBottom:'15px'}}></i></span>
                </div>
                <div className="modal-container-body">
                    <div className="questions-form">
                        <form onSubmit={submit} method="post" autoComplete="off">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="firstname" onChange={handleChange} placeholder="First Name" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="lastname" onChange={handleChange} placeholder="Last Name" required />
                                </div>
                                <div className="col-12">
                                    <input type="email" name="email" onChange={handleChange} placeholder="Email Address" required />
                                </div>
                                <div className="col-12">
                                    <input type="text" name="plan" value={plan} disabled placeholder="" />
                                </div>
                                <div className="col-12">
                                    <input type="submit" value={state.loading ? "Wait" : "Submit"}></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        </div>
        </>
    )
}

export function GetQuoteModal({open, onClose}){
    const [state, dispatch] = useReducer(QuoteReducer, quote_initial)
    function handleChange(e){
        dispatch({
            type:ACTION_TYPES.QUOTE_FIELD,
            payload: {name: e.target.name, value: e.target.value}
        })
    }

    function submit(e){
        e.preventDefault()
        dispatch({type:ACTION_TYPES.QUOTE_START})
        postData('/quotes', state.data)
        .then((data) => {
            dispatch({type:ACTION_TYPES.QUOTE_SUCCESS})
        })
        .catch((err) => {
            dispatch({type:ACTION_TYPES.QUOTE_ERROR})
        })
    }

    if (!open) return null
    return (
        <>
            <div className="modal-bg">
            { state.success ? 
                <div className="modal-container">
                    <div className="modal-container-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="success-pop">
                                        <span><Checked /></span>
                                        <h1 style={{paddingTop:'20px'}}> Thank You!</h1>
                                        <p>Your submission has been recieved. Kindly check your mailbox or spam for further proceedings.</p>
                                        <div className="home-btn">
                                            <button type="button" onClick={onClose} className="btn"><i className="bi bi-house-door" ></i> Back To Site</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="modal-container">
                    <div className="modal-container-header">
                        <div className="modal-container-title">
                            <h4>Quote Request Form</h4>
                        </div>
                        <span className="icon-button" onClick={onClose}><i className="bi bi-x-circle-fill" style={{fontSize:'24px', marginBottom:'15px'}}></i></span>
                    </div>  
                    <div className="modal-container-body">
                        <div className="questions-form">
                            <form onSubmit={submit} method="post" autoComplete="off">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="firstname" value={state.data.firstname} onChange={handleChange} placeholder="First Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="lastname" value={state.data.lastname} onChange={handleChange} placeholder="Last Name" required />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" name="email" value={state.data.email} onChange={handleChange} placeholder="Email Address" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="phone" value={state.data.phone} onChange={handleChange} placeholder="Phone Number" required />
                                    </div>
                                    <div className="col-md-6">
                                        <select name="service" className="form-select" onChange={handleChange} value={state.data.service} required>
                                            <option value="">Select a service</option>
                                            <option value="web-devlopment">Website Development</option>
                                            <option value="digital-marketing">Digital Marketing</option>
                                            <option value="branding">Brand Management</option>
                                            <option value="app-development">Application Development</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <input type="submit" value={state.loading ? "Waiting" : "Submit"}></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

