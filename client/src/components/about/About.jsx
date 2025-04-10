import Title from "../UI/Title";
import './about.css'
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'
import about3 from '../../assets/about3.jpg'


export default function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <Title text1={'About'} text2={'Us'} />
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus iusto consectetur nesciunt cupiditate neque at animi beatae accusantium, vel repudiandae ducimus inventore maxime omnis eum ratione, recusandae nostrum harum.</p>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quibusdam autem voluptatem. Neque error ut vitae cum rerum soluta commodi nulla, non porro doloremque! Aliquid, cupiditate. Quo quis esse neque.</p>
            <div className="images">
                <img className="image" src={about1} alt="" />
                <img className="image" src={about2} alt="" />
                <img className="image" src={about3} alt="" />
            </div>
        </div>
    )
}
