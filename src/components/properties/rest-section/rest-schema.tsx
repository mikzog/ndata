import React, { useState } from 'react';

interface Props {}

const RESTSchema: React.FC<Props> = () => {
  return (
    <>
      <a href="#" className="nd-button button-blue-line import-schema" title="">
        <svg width="14" height="14" viewBox="0 0 48 48">
          <path fill=""
                d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z"/>
          <path d="M0 0h48v48H0z" fill="none"/>
        </svg>
        Import Schema
      </a>

      <div className="sub-tabs-content connection">
        <table>
          <tr>
            <th>Column name</th>
            <th>Type</th>
          </tr>
          <tr>
            <td>
              regionList
            </td>
            <td>
              string []
            </td>
          </tr>
          <tr>
            <td>
              ownerOrganisation
            </td>
            <td>
              string []
            </td>
          </tr>
          <tr>
            <td>
              programID
            </td>
            <td>
              string []
            </td>
          </tr>
          <tr>
            <td>
              indicationList
            </td>
            <td>
              string []
            </td>
          </tr>
          <tr>
            <td>
              programDescription
            </td>
            <td>
              abc string
            </td>
          </tr>
          <tr>
            <td>
              programProduct
            </td>
            <td>
              abc null
            </td>
          </tr>
          <tr>
            <td>
              programTitle
            </td>
            <td>
              abc string
            </td>
          </tr>
        </table>
      </div>
      </>
  )
};

export default RESTSchema;