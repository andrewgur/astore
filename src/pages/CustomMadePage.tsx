import React, { FC } from 'react';
import { GroupList } from '../components/Group/GroupList';
import { PageHeader } from '../components/Page/PageHeader';
import groupsMock from '../mock/groups.json';

export const CustomMadePage: FC = () => { 
  const {groups} = groupsMock

  return (
    <div className='wrapper'>
      <PageHeader
        title='Свой дизайн'
        description={<>Выберите вещь, а затем — цвет, размер и стикер.<br/> Перенесём стикер на вещь как на фото</>}
      />
      <GroupList groups={groups} />
    </div>
  );
};