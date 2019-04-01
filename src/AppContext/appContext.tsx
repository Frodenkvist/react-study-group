import * as React from 'react';

export interface AppContext {
  loggedInUser: User | null;
  setLoggedInUser: (user: User) => void;
}

const context = React.createContext<AppContext>({
  loggedInUser: null,
  setLoggedInUser: () => {}
});

export const AppContextProvoder = context.Provider;

const AppContextConsumer = context.Consumer;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const withAppContext = <
  P extends { appContext?: AppContext },
  R = Omit<P, 'appContext'>
>(
  Component: React.ComponentClass<P> | React.StatelessComponent<P>
): React.SFC<R> => {
  return function BoundComponent(props: R & P) {
    return (
      <AppContextConsumer>
        {value => <Component {...props} appContext={value} />}
      </AppContextConsumer>
    );
  };
};
