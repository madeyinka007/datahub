import { useState } from "react";
import { Projects } from "../constants/projects";
import { Services } from "../constants";
import { Link } from "react-router-dom";


export function ProjectCard() {
    const [projects, setProjects] = useState(Projects)
    const TabMenu = ['UI/UX', 'Software', 'Web Design', 'Marketing']
    const filtered = function(curr){
        const data = Projects.filter((item) => {
            return item.filter === curr
        })
        setProjects(data)
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <ProjectTab 
                        filtered={filtered}
                        MenuTab={TabMenu}
                        setProjects={setProjects}
                    />
                </div>
            </div>
            <div className="row g-4 project-items">
                <ProjectGrid
                    items={projects}
                />
            </div>
        </>
    )
}

export function ProjectTab({MenuTab, filtered, setProjects}){
    const [selected, setSelected] = useState('All')
    return (
        <ul className="isotope-menu">
            <li className={selected === 'All' ? 'active' : ''} onClick={() => {setProjects(Projects); setSelected('All')}}>All</li>
            {MenuTab.map((item, index) => {
                return (
                    <li
                        className={ selected === item ? 'active' : ''}
                        key={index}
                        onClick={() => {filtered(item); setSelected(item)}}
                    >{item}</li>
                )
            })}
        </ul>
    )
}

export function ProjectGrid({items}){
    return (
        <>
            {
                items.map((item, index) => {
                    return (
                        <div className="col-md-6 col-lg-4 single-item" key={index}>
                            <div className="item-img">
                                <a href="project.html"><img src= {`${"assets/img/project/"+item.thumb}`} alt="project-1" /></a>
                            </div>
                            <div className="item-inner-cnt">
                                <span>{item.type}</span>
                                <h4>{item.name}</h4>
                                <div className="view-btn">
                                    <Link to={"/project/"+item.slug}>view details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export function ServiceCard(){
    return (
        <>
            { Services.map((item, index) => {
                return (
                    <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" key={index+1}>
                        <div class="single-service">
                            <span>0{index+1}</span>
                            <div class="icon">
                                <img src={"assets/img/icons/"+item.icon+".png"} alt={item.name} />
                            </div>
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                            <div class="read-btn">
                                <Link to={"/service/"+item.slug}>Read More</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}