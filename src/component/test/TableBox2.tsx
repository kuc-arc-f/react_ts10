import * as React from 'react';

export default function TableBox2() {
  return (
  <div>
    <h3>テーブル サンプル2</h3>
    <hr className="my-2" />
    <table className="table  table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>マーク22</td>
          <td>史郎</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>ヤコブ22</td>
          <td>次郎</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}
