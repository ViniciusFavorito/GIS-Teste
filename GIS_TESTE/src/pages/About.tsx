import logo from '/assets/background2.jpg'


export default function About() {

    var sectionStyle = {
        width: "100%",
        height: "839px",
        backgroundImage: `url(${logo})`
    };

    return (
        <div style={sectionStyle}>
            Sobre
        </div>
    )
}