export function Form() {
    const jsonObject = {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/6/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/7/"
        ],
        "species": [
            "https://swapi.dev/api/species/1/"
        ],
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    };

    setTimeout(()=>{
        document.querySelector('#button').addEventListener('click', (event)=>{
            event.stopPropagation();
            const preElement = document.querySelector('#pre');
            preElement.innerHTML = JSON.stringify(jsonObject, null, 2);
        })
    }, 1000)

    return (
        <>
            <form action="submit" className="form mt-2 d-flex gap-5">
                <div className="input-group mb-3">
                    <span className="input-group-text">https://swapi.dev/api/</span>
                    <input type="text" className="form-control" placeholder="people/1"/>
                    <button id="button" type="button" className="btn btn-success">Request</button>
                </div>
            </form>

            <div className="interactive_output" id="interactive_output">
                <pre id="pre">
                    {/* JSON */}
                </pre>
            </div>
        </>
    );
}