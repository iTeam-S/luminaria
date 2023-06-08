
function Body () {
    return (
        <div className="body">
            <div className="diviseurHead">
                <div className="divHrTop"></div>
                <svg className="svgHead" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                    <line x1="0" y1="0" x2="0" y2="150" stroke="black" strokeWidth="2" />  
                    <path d="M0,100 A100,100 0 0,1 100,0" fill="none" stroke="black" strokeWidth="1" /> 
                </svg>
            </div>
            <div className="entete">
                <div className="d-flex justify-content-start titrePage">
                    <h1>Ensemble , <br/> Eclairons le monde</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="svgCircle" viewBox="0 0 400 400">
                    <path id="circlePath" fill="#212121" strokeWidth="70"  stroke="#212121" d="
                        M 200, 200
                        m -160, 0
                        a 160,160 0 1,1 320,0
                        a 160,160 0 1,1 -320,0
                    " />
                    <text fontFamily="monospace" fontSize="40" fontWeight="bold" fill="white">
                        <textPath startOffset="1%" href="#circlePath">FAIRE UN DON ____________________________________</textPath>
                    </text>
                    <text x="200" y="220" textAnchor="middle" alignmentBaseline="middle" fontFamily="Arial" fontSize="100" fill="white">&#8594;</text>
                </svg>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button className="btn btn-outline-dark mx-3 shadow-merch" type="submit">More  <i class="fas fa-light fa-arrow-down fa-lg mx-1"></i></button>
            </div>

        </div>
    )
}

export default Body;