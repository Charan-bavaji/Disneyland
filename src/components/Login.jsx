import React from 'react'
const Login = () => {
  return (
    <section className="w-full h-[100vh] bg-[url('/src/assets/images/home-background.png')] bg-cover bg-no-repeat">
      <div className="w-full h-[100vh] px-8 bg-[url('/src/assets/images/login-background.jpg')] bg-cover bg-no-repeat bg-center flex justify-center items-center md:h-[100vh] lg:h-[100vh] ">
        <div className=" flex flex-col pb-10 w-[36rem] h-auto ">
          <div className="py-2">
            <img src='/src/assets/images/cta-logo-one.svg' alt='img1' />
          </div>
          <div className="w-full bg-blue-600 py-1 flex justify-center items-center font-bold">
            <button className='w-full py-2 text'>GET ALL THERE</button>
          </div>
          <div className="py-4 text-[11px] tracking-[1.1px] text-center">
            <span> Get Premier Access to Raya and the Last Dragon for an additional fee
              with a Disney+ subscription. As of 03/26/21, the price of Disney+
              and The Disney Bundle will increase by $1.
            </span>
          </div>
          <div>
            <img src='/src/assets/images/cta-logo-two.png' alt='img1' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
