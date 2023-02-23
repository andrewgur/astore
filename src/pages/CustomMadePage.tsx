import React, { FC, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchGroups, groupsSelector, hasErrorSelector, isLoadingSelector } from 'store/page-custom';
import { GroupList } from '../components/Group/GroupList';
import { PageHeader } from '../components/Page/PageHeader';
import { Loader } from 'components/Loader/Loader';
import { Retry } from 'components/Retry/Retry';

export const CustomMadePage: FC = () => {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(groupsSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const hasError = useAppSelector(hasErrorSelector);

  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);

  const retryHandler = useCallback(() => {
    dispatch(fetchGroups());
  }, [dispatch]);

  return (
    <div className='wrapper'>
      <PageHeader
        title='Свой дизайн'
        description={<>Выберите вещь, а затем — цвет, размер и стикер.<br /> Перенесём стикер на вещь как на фото</>}
      />
      {hasError &&
        <Retry retryHandler={retryHandler} />
      }
      {isLoading &&
        <Loader />
      }
      {!isLoading && !hasError && groups.length &&
        <GroupList groups={groups} />
      }
    </div>
  );
};