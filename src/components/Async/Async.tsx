import * as React from 'react';

interface Props {
  load: Promise<any>;
  componentProps: any;
}

export class Async extends React.Component<Props> {
  cancelUpdate: boolean = false;
  C: any;

  componentDidMount() {
    this.cancelUpdate = false;
    this.props.load.then(c => {
      this.C = c;
      if (!this.cancelUpdate) {
        this.forceUpdate();
      }
    });
  }

  componentWillMount() {
    this.cancelUpdate = true;
  }

  render() {
    const { componentProps } = this.props;

    return this.C ? (
      this.C.default ? (
        <this.C.default {...componentProps} />
      ) : (
        <this.C {...componentProps} />
      )
    ) : null;
  }
}
