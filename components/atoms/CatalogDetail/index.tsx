import Image from 'next/image';
import React from 'react';

interface CatalogDetailProps {
  product: string;
  text: string[];
  image: string;
  list?: string[];
}

const CatalogDetail: React.FC<CatalogDetailProps> = ({
  product,
  text,
  image,
  list
}: CatalogDetailProps) => (
  <div className="max-w-[1200px] mx-auto md:flex">
    <div className="px-5 pb-5 w-full h-auto md:w-1/2 md:pb-0">
      <Image
        src={image}
        className="!static"
        layout="fill"
        objectFit="cover"
        fill={true}
        alt="Producto"
      />
    </div>
    <div className="md:w-1/2 px-5">
      <h3 className="text-2xl font-regular md:text-3xl pb-5">{product}</h3>
      {text.map((elm, index) => (
        <p
          key={index}
          className="pb-4"
          dangerouslySetInnerHTML={{
            __html: elm
          }}
        />
      ))}
      {list && list.length > 0 && (
        <ul className="pl-5">
          {list.map((elm, index) => (
            <li key={index}>{elm}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default CatalogDetail;
