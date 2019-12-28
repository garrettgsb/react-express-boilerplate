import React from "react";

// export interface HelloProps { compiler: string; framework: string; }


type ProfileProps = { compiler: string; framework: string; message: string}

export class Profile extends React.Component<ProfileProps, {}> {
  render() {
      return <h1>Hello from {this.props.compiler} and {this.props.framework} and {this.props.message}!</h1>;
  }
}