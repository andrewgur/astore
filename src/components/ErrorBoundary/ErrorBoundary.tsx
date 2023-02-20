import React, { ErrorInfo, ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
};
type StateType = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<PropsType, StateType> {
  public state: StateType = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): StateType {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ERROR CATCHED', error, info);
  }

  public render() {
    if (this.state.hasError) {
      return <h1 data-testid='errorboundary'>Произошла ошибка. Перезагрузите страницу.</h1>;
    }

    return this.props.children;
  }
}