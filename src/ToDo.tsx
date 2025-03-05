import React, { PureComponent } from "react";

interface IHomeProps extends Props<HTMLDivElement> {}

export const withHigherOrderComponent: IHomeProps =
  (Component: React.ComponentType<IHomeProps>) => (props: IHomeProps) =>
    (
      <>
        <p> HOC</p>
        <Component {...props} />
      </>
    );
