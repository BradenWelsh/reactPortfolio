import React from 'react';

const Projects = () =>{
<section id="work" className="work">
    <h2>Work</h2>
        <div className="f-work">
                <div className="boxes">
                    <div className="box">
                        <a href="https://github.com/BradenWelsh/run-buddy">
                        <img src="./assets/images/runbuddy.png" className= "size" alt="img to runbuddy" /></a>
                        <div className="creations">
                            <h3 className="creationN">Run-Buddy</h3>
                            <h4 className="p-speciality"> HTML / CSS </h4>
                        </div>
                    </div>
                </div>
                    <div className="creations">
                        <div className="boxes">
                            <div className="box"> 
                            <a href="https://github.com/BradenWelsh/weekly-challenge-01">
                            <img src="./assets/images/site.png" className= "size" alt="img to Horiseon" /></a>
                            <div className="creations">
                                <h3 className="creationN">Horiseon</h3>
                                <h4 className="p-speciality"> HTML/ CSS </h4>
                            </div>
                        </div>
                    </div>
                    <div className="creations">
                        <div className="boxes">
                            <div className="box"> 
                            <a href="https://fantasy-team-builder.herokuapp.com/">
                            <img src="./assets/images/ss2.png" className= "size" alt="img of FantastyTeamBuilder" /></a>
                            <div className="creations">
                                <h3 className="creationN"> FantastyTeamBuilder </h3>
                                <h4 className="p-speciality"> Bcrypt, node, express, Express Handle Bars, MySQL, dotenv, Sequelize</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>
}

export default Projects;