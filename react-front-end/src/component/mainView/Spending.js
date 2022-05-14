import React from 'react';
import "../../sass/spending.scss"
export default function Spending() {

  return (
    <div class="dropdown">
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Clothes</a></li>
    <li><a class="dropdown-item" href="#">Entertainment</a></li>
    <li><a class="dropdown-item" href="#">Groceries</a></li>
    <li><a class="dropdown-item" href="#">Rent</a></li>
    <li><a class="dropdown-item" href="#">Insurance</a></li>
    <li><a class="dropdown-item" href="#">Fuel</a></li>
    <li><a class="dropdown-item" href="#">Eating Out</a></li>
    <li><a class="dropdown-item" href="#">Gifts</a></li>
    <li><a class="dropdown-item" href="#">Donations</a></li>
    <li><a class="dropdown-item" href="#">Shopping</a></li>
    <li><a class="dropdown-item" href="#">Other</a></li>
  </ul>
  <div class="form-outline">
  <input type="number" id="typeNumber" class="form-control" />
  <label class="form-label" for="typeNumber">Amount</label>
</div>
</div>
  );
}