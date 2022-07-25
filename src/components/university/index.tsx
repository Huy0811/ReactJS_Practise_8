import React from "react";

interface universityProps {
  university: {
    id: number;
    name: string;
    address: string;
    foundedYear: number;
  }[];
}

const University = ({ university }: universityProps) => {
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
        {university.map((item: any) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.foundedYear}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default University;
