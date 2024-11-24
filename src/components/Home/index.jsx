import wallpaper from "../../assets/images/woman-illustration_1280.webp";

function Home() {
    return (
        <>
            <img src={wallpaper} alt="wallpaper"/>
            <h1 >MON PLAN DE PROTECTION PERSONNALISE</h1>
            <div id = "buttons">
                <input type = "button" value = "Inscription"/>
                <input type = "button" value = "Connexion" />
            </div>
        </>
    )
}
export default Home;