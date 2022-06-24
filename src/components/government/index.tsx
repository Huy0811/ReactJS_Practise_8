import React from "react";

interface governmentProps {
  government: {
    id: number;
    name: string;
    center: string;
  }[];
}

const Government = (props: governmentProps) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Center</th>
        </tr>
      </thead>
      <tbody>
        {props.government.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.center}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Government;
