import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import MaterialTable from "material-table";
import React from "react";
import Swal from 'sweetalert2';

import tableIcons from "../../../../assets/js/MateralTableIcons";
import './ChairmanRequestedDashboard.css';


const ChairmanRequestedDashboard = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
    })

    const showConfirm = (data) => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(data)
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    const data = [
        { name: "Raj", email: "Raj@gmail.com", department: 'Pharmacy', passingYear: '2017', gender: "M", hall: "ASH", fee: 78456, roll: 'ASH1925022M' },
        { name: "Mohan", email: "mohan@gmail.com", department: 'IIT', passingYear: '2018', gender: "M", hall: "ASH", fee: 456125, roll: 'ASH1925012M' },
        { name: "Sweety", email: "sweety@gmail.com", department: 'ICE', passingYear: '2017', gender: "F", hall: "BKH", fee: 458796, roll: 'BKH1925062F' },
        { name: "Vikas", email: "vikas@gmail.com", department: 'Pharmacy', passingYear: '2021', gender: "M", hall: "ASH", fee: 874569, roll: 'ASH1826022M' },
        { name: "Neha", email: "neha@gmail.com", department: 'Pharmacy', passingYear: '2019', gender: "F", hall: "BKH", fee: 748521, roll: 'BKH1817022F' },
        { name: "Mohan", email: "mohan@gmail.com", department: 'IIT', passingYear: '2020', gender: "M", hall: "ASH", fee: 456125, roll: 'ASH1721622M' },
        { name: "Sweety", email: "sweety@gmail.com", department: 'IIT', passingYear: '2017', gender: "F", hall: "BKH", fee: 458796, roll: 'BKH1816022F' },
        { name: "Vikas", email: "vikas@gmail.com", department: 'ICE', passingYear: '2019', gender: "M", hall: "ASH", fee: 874569, roll: 'ASH1925036M' },
        { name: "Raj", email: "Raj@gmail.com", department: 'ICE', passingYear: '2018', gender: "M", hall: "ASH", fee: 78456, roll: 'ASH1925042M' },

    ];

    const columns = [
        { title: "Name", field: "name", sorting: true, filtering: true, filterPlaceholder: "Filter by name"/*cellStyle: { background: "#009688" }, headerStyle: { color: "#fff" }*/ },
        { title: "Roll", field: "roll", filterPlaceholder: "Filter by roll", align: 'justify' },
        { title: "Department", field: "department", align: "left", filterPlaceholder: "Filter by department" },
        {
            title: "Passing Year", align: 'center', field: "passingYear", /*emptyValue: () => <em>null</em>,
            render: (rowData) => <div style={{ background: rowData.passingYear >= 18 ? "#008000aa" : "#f90000aa", borderRadius: "4px", paddingLeft: 5 }}>{rowData.passingYear >= 18 ? "18+" : "18-"}</div>,
            searchable: false, export: false,*/ filterPlaceholder: "Filter by passingYear",
        },
        // { title: "Gender", field: "gender", filterPlaceholder: "Select", lookup: { M: "Male", F: "Female" } },
        { title: "Hall", field: "hall", align: 'center', filterPlaceholder: "select hall" },
        // {
        //     title: "Fees", field: "fee", type: "currency", align: "left", currencySetting: { currencyCode: "BDT", minimumFractionDigits: 1, }, filterPlaceholder: "Filter by fees",
        //     /* cellStyle: { background: "#009688" }, headerStyle: { color: "#fff" }*/
        // }
    ];

    return (
        <React.Fragment>
            <div>
                <MaterialTable title="Applicant list" icons={tableIcons} columns={columns} data={data}
                    options={{
                        sorting: true, search: true,
                        searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
                        filtering: true, paging: true, ppassingYearSizeOptions: [2, 5, 10, 20, 25, 50, 100], ppassingYearSize: 5,
                        paginationType: "normal", showFirstLastPpassingYearButtons: true, paginationPosition: "bottom", exportButton: false,
                        exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: false,
                        showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
                            disabled: rowData.passingYear == null,
                            // color:"primary"
                        }),
                        columnsButton: false,
                        /*rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                        headerStyle: { background: "#f44336", color: "#fff" }*/
                    }}
                    localization={{
                        header: {
                            actions: 'action',

                        }
                    }}
                    actions={[
                        {
                            icon: () => <CheckIcon htmlColor='green' />,
                            tooltip: "accept",
                            onClick: (e, data) => showConfirm(data),
                        },
                        {
                            icon: () => <ClearIcon htmlColor='red' />,
                            tooltip: "reject",
                            onClick: (e, data) => console.log(data),
                        }
                    ]}

                />
            </div>
            <p style={{ height: '20px' }}></p>
        </React.Fragment >
    )
}

export default ChairmanRequestedDashboard