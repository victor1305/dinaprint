'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [catalogSubmenu, setCatalogSubmenu] = useState(false);

  const menuPaths = [
    {
      name: 'SOBRE NOSOTROS',
      path: '/sobre-nosotros',
      subsection: []
    },
    {
      name: 'SOLUCIONES Y SERVICIOS',
      path: '/servicios',
      subsection: []
    },
    {
      name: 'CATÁLOGO',
      path: '/catalogo',
      subsection: [
        { name: 'PAPELERÍA CORPORATIVA', path: 'papeleria-corporativa' },
        { name: 'FLYERS Y DESPLEGABLES', path: 'flyers-y-desplegables' },
        { name: 'FOLLETOS Y RESVISTAS', path: 'folletos-y-revistas' },
        { name: 'CALENDARIOS', path: 'calendarios' },
        { name: 'ROLL UP', path: 'roll-up' },
        { name: 'EXPOSITORES', path: 'expositores' },
        { name: 'CAJAS Y PACKAGING', path: 'cajas-y-packaging' },
        { name: 'REGALO PROMOCIONAL', path: 'regalo-promocional' },
        { name: 'CARTELES', path: 'carteles' }
      ]
    },
    {
      name: 'BLOG',
      path: '/blog',
      subsection: []
    },
    {
      name: 'CONTACTO',
      path: '/contacto',
      subsection: []
    }
  ];
  return (
    <>
      <nav className="flex bg-white justify-between items-center p-2.5 lg:p-5">
        <div className="relative w-[150px] h-[36px] md:w-[240px] md:h-[58px]">
          <Link href={'/'}>
            <Image
              src="/logo-dinaprint-final-02.png"
              layout="fill"
              objectFit="cover"
              alt="logo Dinaprint"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:block">
          {menuPaths.map((elm, index) => (
            <div
              key={index}
              className="relative px-5 flex items-center text-sm font-semibold text-dina-gray hover:text-secondary"
              onMouseOver={() =>
                elm.subsection.length > 0 && setCatalogSubmenu(true)
              }
              onMouseOut={() =>
                elm.subsection.length > 0 && setCatalogSubmenu(false)
              }
            >
              <Link href={elm.path}>{elm.name}</Link>
              {elm.subsection.length > 0 && (
                <RiArrowDownSLine className="ml-2.5 w-5 h-5 cursor-pointer" />
              )}
              {catalogSubmenu && elm.subsection.length > 0 && (
                <div className="absolute top-0 w-52 z-50 float-left block left-0 pt-10">
                  <div className="shadow-menu">
                    {elm.subsection.map((item, subIndex) => (
                      <Link
                        className="block p-5 bg-white text-dina-gray text-[13px] hover:bg-secondary hover:text-white"
                        key={subIndex}
                        href={`/catalogo/${item.path}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="lg:hidden pr-2.5">
          {openMenu ? (
            <FiX
              className="cursor-pointer w-6 h-6 fixed top-2.5 right-[270px] text-white z-50"
              onClick={() => setOpenMenu(!openMenu)}
            />
          ) : (
            <FiMenu
              className="cursor-pointer w-6 h-6"
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
          <div
            className={`transition-all duration-500 z-50 fixed w-[265px] h-screen bg-secondary top-0 text-white font-semibold text-sm ${
              openMenu ? 'right-[0px]' : 'right-[-265px]'
            }`}
          >
            {menuPaths.map((elm, index) => (
              <div key={index}>
                <div className="flex justify-between px-5 items-center">
                  <Link href={elm.path} className="block leading-[50px]" onClick={() => setOpenMenu(false)}>
                    {elm.name}
                  </Link>
                  {elm.subsection.length > 0 &&
                    (!catalogSubmenu ? (
                      <RiArrowDownSLine
                        className="ml-2.5 w-5 h-5 cursor-pointer"
                        onClick={() => setCatalogSubmenu(!catalogSubmenu)}
                      />
                    ) : (
                      <RiArrowUpSLine
                        className="ml-2.5 w-5 h-5 cursor-pointer"
                        onClick={() => setCatalogSubmenu(!catalogSubmenu)}
                      />
                    ))}
                </div>
                {catalogSubmenu && elm.subsection.length > 0 && (
                  <div className="block relative bg-white text-[13px] text-dina-gray">
                    {elm.subsection.map((item, subIndex) => (
                      <Link
                        className="p-5 block"
                        key={subIndex}
                        href={`/catalogo/${item.path}`}
                        onClick={() => setOpenMenu(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div
        className={
          openMenu
            ? 'fixed z-40 visible opacity-100 bg-modal-back lg:hidden top-0 bottom-0 left-0 right-0'
            : 'hidden opacity-0 invisible'
        }
      />
    </>
  );
};

export default Header;
