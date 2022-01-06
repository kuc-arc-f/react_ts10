import * as React from 'react';

export default function TableBox1() {
  return (
  <div>
    <h3>テーブル サンプル</h3>
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
          <td>マーク</td>
          <td>史郎</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>ヤコブ</td>
          <td>次郎</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>ほげ</td>
          <td>太郎</td>
          <td>@hoge1</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>ふが</td>
          <td>太郎</td>
          <td>@fuga1</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}
