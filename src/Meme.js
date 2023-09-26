import memesData from "./memesData"

function Meme() {

    function getMemeImage() {   
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);
    }
    return (
        <main>
            <div className="form">
                <input type="text" name="" className="form--input" placeholder="top text" />
                <input type="text" name="" className="form--input" placeholder="bottom text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
        </main>
    )
}

export default Meme