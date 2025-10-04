import React from 'react';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center px-8 py-5 bg-gradient-to-b from-black z-10">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
        className="w-44"
      />
    </div>
  );
};

export default Header;
