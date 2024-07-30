'use client'
import React, { act } from 'react'
import { useState, useEffect } from 'react'
import './main.css'
import '../../../public/youtube.jpg'
import '../../../public/course-02.jpg'
function Main() {
    const [projects, setProjects] = useState([])
    async function getProjects() {
        let res = await fetch('http://127.0.0.1:8000/projects')
        let data = await res.json()
        setProjects(data)
    }
    useEffect(() => {
        getProjects()
    }, [])
    
    const [active, setActive] = useState(() => {
        return window.localStorage.getItem('active') || 'all'
    })
    useEffect(() => {
        window.localStorage.setItem('active', active)
    }, [active])
    const [arr, setArr] = useState(() => {
        return JSON.parse( window.localStorage.getItem('arr')) || []
    })
    useEffect(() => {
        window.localStorage.setItem('arr', JSON.stringify(arr))
    }, [arr])
    useEffect(() => {
        setArr(() => {
            let data = JSON.parse(window.localStorage.getItem('arr'))
            return data.length === 0 ? projects : data
        })
    }, [projects])
    
    return (
        <section>
            <ul className="sidebar">
                <li onClick={() => {
                    setActive('all')
                    setArr(projects.map((project) => { return project }))
                }} className={active === 'all' || active === undefined ? 'active' : null}>All Projects</li>
                <li onClick={() => {
                    setActive('Html&Css')
                    setArr(projects.filter((project) => { return project.category === 2 }))
                }} className={active === 'Html&Css' ? 'active' : null}> Html & Css</li>
                <li onClick={() => {
                    setActive('javaScript')
                    setArr(projects.filter((project) => { return project.category === 4 }))
                }} className={active === 'javaScript' ? 'active' : null}> JavaScript</li>
                <li onClick={() => {
                    setActive('React')
                    setArr(projects.filter((project) => { return project.category === 1 }))
                }} className={active === 'React' ? 'active' : null}> React</li>
                <li onClick={() => {
                    setActive('Django')
                    setArr(projects.filter((project) => { return project.category === 3 }))
                }} className={active === 'Django' ? 'active' : null}> Django</li>
            </ul>
            <div className="Gallery">
                <div className="articles">
                    {arr.map((project) => {
                        return (
                            <article key={project.id} className='card'>
                                <img src="course-02.jpg" alt="The cover" />
                                <div className="text">
                                    <h4 className="title">{project.title}</h4>
                                    <p className="des">{project.description}</p>
                                    <div className="links">
                                        <div className="left">
                                            <a href="" target='_blank'><i className="fa fa-link loading"></i></a>
                                            <a href={project.github_url} target='_blank'><i className="fa-brands fa-github loading"></i></a>
                                        </div>
                                        <div className="right">
                                            <a href="">more <i className='fas fa-long-arrow-alt-right'></i></a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Main;