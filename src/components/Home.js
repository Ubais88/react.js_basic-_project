import React from 'react'
import "../styles/home.scss"
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai"

const Home = () => {
  return (
   <>
     <div className="home" id="home">Home
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problem</p>
        </main>
    </div>

    <div className="home2" id ="">
        <img src={vg} alt="Grapgics" />
        <div>
            <p>We are your one and only solution to teach problems you face
            every day.We are leading tech company whose aim is to incease the 
            problem solving ability in childern.</p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who We Are?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sit recusandae ipsam consequatur amet quaerat sequi deserunt quidem eum adipisci? Praesentium minus cupiditate dolorem consectetur, et qui nesciunt pariatur labore error dicta beatae quam, corporis illum officiis? Sequi dolore, quisquam perferendis aliquam quibusdam, voluptatem molestiae ea sint voluptatibus similique iure eius minus hic facilis, eligendi aspernatur unde. Deleniti, alias? Vero recusandae vitae quam eveniet maxime veritatis, harum alias, excepturi consequatur voluptatem, nobis magni repellat maiores eaque dolorem?</p>
        </div>
    </div>

    <div className="home4" id ="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style ={{animationDelay: ".3s" }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style ={{animationDelay: ".5s" }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style ={{animationDelay: ".7s" }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style ={{animationDelay: "1s" }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
   </>
  )
}

export default Home