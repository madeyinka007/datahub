import { useReducer } from "react"
import { AgentReducer, agent_initial } from "../reducer"
import { ACTION_TYPES } from "../types"
import { postData } from "../services"
import { Link } from "react-router-dom"

export default function Referral(){
    const [state, dispatch] = useReducer(AgentReducer, agent_initial)
    const handleChange = (e) => {
        dispatch({
            type: ACTION_TYPES.AGENT_FIELD,
            payload: {name: e.target.name, value: e.target.value}
        })
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch({type:ACTION_TYPES.AGENT_START})
        postData('/agent', state.data) 
        .then((data) => {
            dispatch({
                type:ACTION_TYPES.AGENT_SUCCESS,
                payload:data
            })
        })
        .catch((err) => {
            dispatch({type:ACTION_TYPES.AGENT_ERROR})
        })
    }

    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrapper">
                                <div className="breadcrumb-cnt">
                                    <h1>Referral</h1>
                                    <span><Link to="/">Home</Link><i className="bi bi-arrow-right"></i>Referral</span>
                                    <div className="breadcrumb-video">
                                        <img src="./../assets/img/breadcrumb-video.jpg" alt="breadcrumb" />
                                        <div className="video-inner">
                                            <a className="video-popup" href="https://www.youtube.com/watch?v=0O2aH4XLbto"><i className="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="agent-sec sec-mar-top wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="container">
                <div className="agent-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6">

                        </div>
                        <div className="col-lg-6">
                            <div className="agent-form">
                                <form method="post" onSubmit={submit} >
                                    <div className="row">
                                        <h3>Register To Become A Referral</h3>
                                        <div className="col-md-6">
                                            <input type="text" name="firstname" value={state.data.firstname} onChange={handleChange} required placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="lastname" value={state.data.lastname} onChange={handleChange} required placeholder="Last Name" />
                                        </div>
                                        <div className="col-12">
                                            <input type="email" name="email" value={state.data.email} onChange={handleChange} required placeholder="Email Address" />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" name="phone" value={state.data.phone} onChange={handleChange} required placeholder="Phone Number" />
                                        </div>
                                        <div className="col-12">
                                            <input type="submit" value={state.loading ? "Waiting" :"Get Started"} />
                                        </div>
                                    </div>
                                    {state.message !== '' && <div className={state.error ? 'error' : 'success'}>{state.message}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}