<div className="relative">
<button
  className="rounded-full border-[#D6D6D6] border-[1px] w-full md:w-[238px] h-[55px] px-[30px] flex justify-between items-center"
  onClick={() => togglePopupCountry(!isOpenPopupCountry)}
>
  <span className="text-[#333333]">Choose Country</span>

  {isOpenPopupCountry ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )}
</button>

{ isOpenPopupCountry && (<section className="absolute top-[55px] rounded-[28px] border-[#D6D6D6] border-[1px] w-full md:w-[238px] px-[30px] flex justify-between items-center">
  <ul>
    <li className="leading-[36px]">United Arab Emirates</li>
    <li>Russia</li>
    <li>Australia</li>
    <li>Brasil</li>
    <li>India</li>
  </ul>
</section>)}
</div>