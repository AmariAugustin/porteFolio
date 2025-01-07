import React, { useState } from 'react';

const skills = [{
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'Vite']
},
{
    category: 'Software Development',
    skills: ['Python', 'Java', 'C', 'Ocaml', 'Git', 'GitHub', 'Linux', 'Bash']

},
{
    category: 'Languages',
    skills: ['French', 'English']
},
{
    category: 'Design',
    skills: ['Figma', 'Adobe XD', 'Adobe Illustrator', 'Adobe Photoshop']
},
{
    category: 'Others',
    skills: ['Linux', 'Bash', 'LaTeX', 'Vim', 'VSCode']
}
]


function Skills() {
    const [state, setState] = useState('Web Development');
    return (
        <>
            <h1>What are my Skills ?</h1>
            {skills.map((skill) => (
                <button 
                    key={skill.category} 
                    className='btn btn-light' 
                    style={{ margin: '5px' }} 
                    onClick={() => setState(skill.category)}
                >
                    {skill.category}
                </button>
            ))}
            <div>
                {skills.map((skill) => {
                    if (skill.category === state) {
                        return (
                            <ul key={skill.category}>
                                {skill.skills.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                        );
                    }
                    return null;
                })}
            </div>
        </>
    );
}


export default Skills;