import React from 'react'
import "../styles/contact.scss"

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form action="">
            <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" placeholder="Enter Full Name" required/>
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" placeholder="abc123@gmail.com" required/>
                </div>

                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" name="" id="" placeholder="Tell Us Query..." required/>
                </div>

                <button type='submit'>Send</button>

            </form>
        </main>
    </div>
  )
}

export default Contact