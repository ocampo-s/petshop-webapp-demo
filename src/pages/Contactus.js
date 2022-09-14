import React from 'react'

const Contactus = () => {
  return (
    <div className="main">
      <h1>ABOUT US</h1>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
        <p>Our location</p>
        <iframe title='petshop-map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834.467507654526!2d24.95342894039859!3d60.16898964139732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bcf96c6652b%3A0xa327ad5be94bf227!2sAleksanterinkatu%2010%2C%2000170%20Helsinki!5e0!3m2!1sen!2sfi!4v1656350774657!5m2!1sen!2sfi"
          style={{border: "0" }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}

export default Contactus
