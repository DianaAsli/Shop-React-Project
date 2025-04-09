import Title from "../UI/Title";
import './about.css'

export default function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <Title text1={'About'} text2={'Us'} />
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus iusto consectetur nesciunt cupiditate neque at animi beatae accusantium, vel repudiandae ducimus inventore maxime omnis eum ratione, recusandae nostrum harum.</p>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quibusdam autem voluptatem. Neque error ut vitae cum rerum soluta commodi nulla, non porro doloremque! Aliquid, cupiditate. Quo quis esse neque.</p>
            <p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis sequi repellendus, laborum aspernatur in eveniet unde. Consequuntur atque rem accusantium obcaecati, repellat quidem illum incidunt debitis. Fuga, ipsum sunt.</p>
        </div>
    )
}
