import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import moment from 'moment';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'src/redux/rootReducer';

const records = [
  {
    cardType: 'Thẻ Gradient Light 1',
    address: 'k560/21 Trần cao vân (thiết kế)',
    phoneNumber: '0914431365',
    dateCreated: {
      seconds: 1648354770,
      nanoseconds: 627000000,
    },
    status: 'TODO',
    fbLink: '',
    name: 'Võ Minh Nhật',
    id: '4PnXb3SeD7Fe4ueJjKEO',
  },
  {
    status: 'TODO',
    fbLink: '',
    address: '51 mỹ an 7 (thiết kế)',
    phoneNumber: '0355380305',
    name: 'Hoàng Thị Thanh Lịch',
    cardType: 'Thẻ Gradient Light 1',
    dateCreated: {
      seconds: 1648354602,
      nanoseconds: 40000000,
    },
    id: 'ByAHfRsn47jUshmGgRSz',
  },
  {
    status: 'DOING',
    dateCreated: {
      seconds: 1648354527,
      nanoseconds: 795000000,
    },
    updatedTime: '2022-03-30 00:44:23',
    name: 'Nguyễn Lan Quỳnh',
    address: '33 trần bạch đằng, (thiết kế)',
    editBy: '',
    phoneNumber: '0826439346',
    fbLink: '',
    cardType: 'Thẻ Gradient Light 1',
    id: 'vGIV2LZ1wBmv85iXO7bs',
  },
  {
    fbLink: 'https://www.facebook.com/LESONTUNG3105/',
    address: '107 Hoa Lư, Nại Hiên Đông, Sơn Trà, Đà Nẵng',
    name: 'Lê Sơn Tùng',
    dateCreated: {
      seconds: 1627907410,
      nanoseconds: 147000000,
    },
    phoneNumber: '378423104',
    cardType: 'Thẻ Gradient Light 1',
    status: 'INVALID',
    id: 'NwNgx2V4MtirIdOedxgr',
  },
  {
    fbLink: 'https://www.facebook.com/LESONTUNG3105/',
    address: '107 Hoa Lư, Nại Hiên Đông, Sơn Trà, Đà Nẵng',
    name: 'Lê Sơn Tùng',
    dateCreated: {
      seconds: 1627907410,
      nanoseconds: 147000000,
    },
    phoneNumber: '378423104',
    cardType: 'Thẻ Gradient Light 1',
    status: 'INVALID',
    id: 'NwNgx2V4MtirIdOedxgr',
  },
  {
    fbLink: 'https://www.facebook.com/LESONTUNG3105/',
    address: '107 Hoa Lư, Nại Hiên Đông, Sơn Trà, Đà Nẵng',
    name: 'Lê Sơn Tùng',
    dateCreated: {
      seconds: 1627907410,
      nanoseconds: 147000000,
    },
    phoneNumber: '378423104',
    cardType: 'Thẻ Gradient Light 1',
    status: 'INVALID',
    id: 'NwNgx2V4MtirIdOedxgr',
  },
  {
    fbLink: 'https://www.facebook.com/LESONTUNG3105/',
    address: '107 Hoa Lư, Nại Hiên Đông, Sơn Trà, Đà Nẵng',
    name: 'Lê Sơn Tùng',
    dateCreated: {
      seconds: 1627907410,
      nanoseconds: 147000000,
    },
    phoneNumber: '378423104',
    cardType: 'Thẻ Gradient Light 1',
    status: 'INVALID',
    id: 'NwNgx2V4MtirIdOedxgr',
  },
  {
    fbLink: 'https://www.facebook.com/LESONTUNG3105/',
    address: '107 Hoa Lư, Nại Hiên Đông, Sơn Trà, Đà Nẵng',
    name: 'Lê Sơn Tùng',
    dateCreated: {
      seconds: 1627907410,
      nanoseconds: 147000000,
    },
    phoneNumber: '378423104',
    cardType: 'Thẻ Gradient Light 1',
    status: 'INVALID',
    id: 'NwNgx2V4MtirIdOedxgr',
  },
  {
    fbLink: 'https://www.facebook.com/LESONTUNG3105/',
    address: '107 Hoa Lư, Nại Hiên Đông, Sơn Trà, Đà Nẵng',
    name: 'Lê Sơn Tùng',
    dateCreated: {
      seconds: 1627907410,
      nanoseconds: 147000000,
    },
    phoneNumber: '378423104',
    cardType: 'Thẻ Gradient Light 1',
    status: 'INVALID',
    id: 'NwNgx2V4MtirIdOedxgr',
  },
  {
    fbLink: 'https://www.facebook.com/LESONTUNG3105/',
    address: '107 Hoa Lư, Nại Hiên Đông, Sơn Trà, Đà Nẵng',
    name: 'Lê Sơn Tùng',
    dateCreated: {
      seconds: 1627907410,
      nanoseconds: 147000000,
    },
    phoneNumber: '378423104',
    cardType: 'Thẻ Gradient Light 1',
    status: 'INVALID',
    id: 'NwNgx2V4MtirIdOedxgr',
  },
];

const AgGridTable: React.FC<Props> = () => {
  const MyRenderer = value => {
    return (
      <div style={{ display: 'flex' }}>
        <img
          src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif"
          className="my-spinner"
          alt="haha"
          width={40}
          height={40}
        />
        {moment(value).format('MM/DD/YYYY')}
      </div>
    );
  };
  const [rowData] = useState(records);

  const [columnDefs] = useState([
    { field: 'name', headerName: 'Name' },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      enableValue: true,
      suppressMenu: true,
      filter: 'agTextColumnFilter',
    },
    { field: 'dateCreated.seconds', headerName: 'Date Created', cellRenderer: MyRenderer },
    { field: 'fbLink', headerName: 'Facebook URL' },
    { field: 'cardType', headerName: 'Type' },
    { field: 'address', headerName: 'Address' },
    { field: 'status', headerName: 'Status', filter: 'agTextColumnFilter' },
  ]);
  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      floatingFilter: true,
    }),
    [],
  );

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: '1000px', width: '1500px' }}>
        <AgGridReact
          className="ag-theme-alpine"
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          suppressRowClickSelection
        />
      </div>
    </>
  );
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const mapStateToProps = (state: IRootState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AgGridTable);
