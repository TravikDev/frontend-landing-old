import React from 'react'

function Footer() {
  return (
    <article className="bg-black py-[40px] px-[28px] md:h-[100px] flex justify-center items-center text-white">
    <section className=" md:w-[1170px] flex justify-between flex-col-reverse md:flex-row">    
        <section className="text-[16px] flex flex-col items-center md:flex-row gap-[10px] md:gap-[30px]">
            <span className="mt-[20px] md:mt-0">Copyright © 2022. All Rights Reserved.</span> 
            <section className="flex justify-evenly gap-[20px]">
                <button className="footer-link">User Agreement</button>
                <button className="footer-link">Privacy Policy</button>
            </section>
        </section>

        <section className="gap-[20px]">
            <section className="flex justify-center gap-[15px]">
                <button><img src={process.env.PUBLIC_URL + "/img/social/Facebook.png"} width="40px" height="40px" /></button>
                <button><img src={process.env.PUBLIC_URL + "/img/social/Twitter.png"} width="40px" height="40px"  /></button>
                <button><img src={process.env.PUBLIC_URL + "/img/social/Youtube.png"} width="40px" height="40px"  /></button>
                <button><img src={process.env.PUBLIC_URL + "/img/social/Instagram.png"} width="40px" height="40px"  /></button>
            </section>
        </section>
    </section>
</article>
  )
}

export default Footer