import React, { Component } from "react";

import "../styles/App.scss";

export default class Categories extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Categories of Non-Immigrant Visas</h2>
          <br />
          <div className="descrLast">
            <ul>
              <li>Diplomats and Foreign Government Officials (A)</li>
              <li>Visitor Visas (B1/B2)</li>
              <li>Transit Visas (C)</li>
              <li>Crewmen (D1)</li>
              <li>Treaty Traders (E1)</li>
              <li>Treaty Investors (E2)</li>
              <li>Australian Professionals (E3)</li>
              <li>Students (F1)</li>
              <li>
                Employees of Designated International Institutions (G and NATO)
              </li>
              <li>Professional Workers (H1B)</li>
              <li>Agricultural Workers (H2A)</li>
              <li>Skilled and Unskilled Workers (H2B)</li>
              <li>Trainees (H3)</li>
              <li>Foreign Journalists (I)</li>
              <li>Exchange Visitors (J1)</li>
              <li>Fiancées of US citizens (K1)</li>
              <li>Spouses of US citizens (K3)</li>
              <li>Intra-Company Transferees (L1)</li>
              <li>Vocational Students (M1)</li>
              <li>Persons with Extraordinary Abilities (O)</li>
              <li>Athletes and Entertainers (P)</li>
              <li>International Cultural Exchange Visitors (Q)</li>
              <li>Religious Workers (R)</li>
              <li>Witnesses and Informants (S)</li>
              <li>Victims of Human Trafficking (T)</li>
              <li>Victims of Crime (U)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
