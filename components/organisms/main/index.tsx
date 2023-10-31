import React from 'react';

import { MainPrincipal, MainSecond } from '@/components/atoms';

const Main: React.FC = () => (
  <>
    <MainPrincipal />
    <div className="mt-20">
      <MainSecond />
    </div>
  </>
);

export default Main;
