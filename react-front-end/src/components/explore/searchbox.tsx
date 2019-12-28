import React from "react";

// export interface HelloProps { compiler: string; framework: string; }


type HelloProps = { compiler: string; framework: string; message: string}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
      return <h1>Hello from {this.props.compiler} and {this.props.framework} and {this.props.message}!</h1>;
  }
}