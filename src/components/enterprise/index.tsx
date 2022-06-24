import React from "react";

interface enterpriseProps {
  enterprise: {
    id: number;
    name: string;
    operation: string;
    foundedYear: number;
  }[];
}

const Enterprise = (props: enterpriseProps) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Enterprise Name</th>
          <th>Operation</th>
          <th>Founded Year</th>
        </tr>
      </thead>
      <tbody>
        {props.enterprise.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.operation}</td>
            <td>{item.foundedYear}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Enterprise;
