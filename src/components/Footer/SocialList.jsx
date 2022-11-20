import React from 'react'
import socials from "../../data/socials.json"

function SocialList() {
  return (
    <section className="flex justify-center gap-[15px]">
        { socials.map(social => (
              <a href={social.url} target="_blank">
              <img
                src={process.env.PUBLIC_URL + social.img}
                width="40px"
                height="40px"
                alt={social.title}
              />
              </a>
))}
          </section>
  )
}

export default SocialList