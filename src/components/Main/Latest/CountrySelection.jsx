<div className="relative">
  <button
    className="flex h-[55px] w-full items-center justify-between rounded-full border-[1px] border-[#D6D6D6] px-[30px] md:w-[238px]"
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
        className="h-6 w-6"
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
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    )}
  </button>

  {isOpenPopupCountry && (
    <section className="absolute top-[55px] flex w-full items-center justify-between rounded-[28px] border-[1px] border-[#D6D6D6] px-[30px] md:w-[238px]">
      <ul>
        <li className="t-[30px]">United Arab Emirates</li>
        <li>Russia</li>
        <li>Australia</li>
        <li>Brasil</li>
        <li>India</li>
      </ul>
    </section>
  )}
</div>;
