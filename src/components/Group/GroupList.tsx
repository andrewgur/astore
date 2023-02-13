import React, { FC } from 'react';
import { GroupType } from '../../types/Group';
import { GroupItem } from './GroupItem/GroupItem';
import cls from './group.module.css';

type GroupListProps = {
  groups: GroupType[]
};

export const GroupList: FC<GroupListProps> = ({ groups }) => {
  return (
    <div className={cls.group} data-testid="GroupList">
      {groups.map(group => <GroupItem key={group.id} {...group}/>)}
    </div>
  );
};