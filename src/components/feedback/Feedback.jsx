import './feedback.css'
const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container feedback__container">
        <h2 className="feedback__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
        <p className="feedback__desc">Type your email down below and be young wild generation</p>
        <div className='feedback__form'>
          <input type="email" placeholder="Add your email here" />
          <button type="submit">SEND</button>
        </div>
      </div>
    </section>
  );
}

export default Feedback;