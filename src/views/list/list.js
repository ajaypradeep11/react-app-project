import React from 'react'
import {
    CCard,
    CCardBody,
    CButton,
    CCardTitle,
    CCardText,
    CTable,
    CCol,
    CButtonGroup,
    CTableRow,
    CTableHeaderCell,
    CTableHead,
    CTableBody,
    CTableDataCell,
    CFormLabel,
    CFormSelect,
    CFormSwitch,
    CFormInput,
    CRow,
    CContainer,
    CHeader,
    CCardHeader,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilTrash, cilPen } from '@coreui/icons'
const List = () => {
    return (
        <CContainer fluid>

            <CCard className="mb-3"></CCard>


            <CCard className="mb-3">

                <CCardBody>
                    <CRow className="mb-3">
                        <CHeader>
                            <CCardTitle>List of created files</CCardTitle>
                        </CHeader>
                    </CRow>
                    <CRow className="mb-3">
                        <CFormLabel htmlFor="fileno" className="col-sm-2 col-form-label">Filter</CFormLabel>
                        <CCol sm={10}>
                            <CFormSelect
                                aria-label="Default select example"
                                options={[
                                    'Select..',
                                    { label: 'One', value: '1' },
                                    { label: 'Two', value: '2' },
                                    { label: 'Three', value: '3', disabled: true }
                                ]}
                            />

                        </CCol>
                    </CRow>



                    <CRow className="mb-3">
                        <CCol xs="auto" >
                            <CFormLabel htmlFor="search">Search</CFormLabel>
                        </CCol>
                        <CCol xs="auto" >
                            <CFormInput placeholder="Search Criteria" type="text" id="search" />
                        </CCol>

                        <CCol xs={7}></CCol>

                        <CCol xs={1} className="ms-auto">
                            <CFormLabel htmlFor="inputPassword6" className="col-form-label">
                                Items per page
                            </CFormLabel>
                        </CCol>
                        <CCol xs="auto" >
                            <CFormSelect
                                aria-label="Default select example"
                                options={[
                                    '0',
                                    { label: 'One', value: '10' },
                                    { label: 'Two', value: '20' },
                                    { label: 'Three', value: '30', disabled: true }
                                ]}
                            />
                        </CCol>
                    </CRow>


                    <CTable striped hover>
                        <CTableHead >
                            <CTableRow >
                                <CTableHeaderCell scope="col">Name of File</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Property</CTableHeaderCell>
                                <CTableHeaderCell scope="col">File Type</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Closing Date</CTableHeaderCell>
                                <CTableHeaderCell scope="col">File No</CTableHeaderCell>
                                <CTableHeaderCell scope="col">File Creation Date</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Lawyer</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Law Clerk</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>

                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableDataCell><CFormInput type="text" placeholder="" aria-label="default input example" /></CTableDataCell>
                                <CTableDataCell><CFormInput type="text" placeholder="" aria-label="default input example" /></CTableDataCell>
                                <CTableDataCell><CFormInput type="text" placeholder="" aria-label="default input example" /></CTableDataCell>
                                <CTableDataCell><CFormInput type="text" placeholder="" aria-label="default input example" /></CTableDataCell>
                                <CTableDataCell><CFormInput type="text" placeholder="" aria-label="default input example" /></CTableDataCell>
                                <CTableDataCell><CFormInput type="text" placeholder="" aria-label="default input example" /></CTableDataCell>
                                <CTableDataCell><CFormInput type="text" placeholder="" aria-label="default input example" /></CTableDataCell>
                                <CTableDataCell><CFormInput type="text" placeholder="" aria-label="default input example" /></CTableDataCell>
                                <CTableDataCell><CFormInput type="text" placeholder="" aria-label="default input example" /></CTableDataCell>



                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell>Chicago</CTableDataCell>
                                <CTableDataCell>Sample Address</CTableDataCell>
                                <CTableDataCell>Mortgage</CTableDataCell>
                                <CTableDataCell>July 21, 2026</CTableDataCell>
                                <CTableDataCell>1234</CTableDataCell>
                                <CTableDataCell>June 20, 2022</CTableDataCell>
                                <CTableDataCell>John Newman</CTableDataCell>
                                <CTableDataCell>Jane Doe</CTableDataCell>
                                <CTableDataCell><CButton size="sm" href="#">Active</CButton></CTableDataCell>
                                <CTableDataCell>
                                    <CButtonGroup>

                                        <CButton size="sm" color="primary"><CIcon icon={cilPen} /></CButton>
                                        <CButton size="sm" color="danger"><CIcon icon={cilTrash} /></CButton>
                                    </CButtonGroup>
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell>Chicago</CTableDataCell>
                                <CTableDataCell>Sample Address</CTableDataCell>
                                <CTableDataCell>Mortgage</CTableDataCell>
                                <CTableDataCell>July 21, 2026</CTableDataCell>
                                <CTableDataCell>1234</CTableDataCell>
                                <CTableDataCell>June 20, 2022</CTableDataCell>
                                <CTableDataCell>John Newman</CTableDataCell>
                                <CTableDataCell>Jane Doe</CTableDataCell>
                                <CTableDataCell><CButton size="sm" href="#">Active</CButton></CTableDataCell>
                                <CTableDataCell>
                                    <CButtonGroup>

                                        <CButton size="sm" color="primary"><CIcon icon={cilPen} /></CButton>
                                        <CButton size="sm" color="danger"><CIcon icon={cilTrash} /></CButton>
                                    </CButtonGroup>
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell>Chicago</CTableDataCell>
                                <CTableDataCell>Sample Address</CTableDataCell>
                                <CTableDataCell>Mortgage</CTableDataCell>
                                <CTableDataCell>July 21, 2026</CTableDataCell>
                                <CTableDataCell>1234</CTableDataCell>
                                <CTableDataCell>June 20, 2022</CTableDataCell>
                                <CTableDataCell>John Newman</CTableDataCell>
                                <CTableDataCell>Jane Doe</CTableDataCell>
                                <CTableDataCell><CButton size="sm" href="#">Active</CButton></CTableDataCell>
                                <CTableDataCell>
                                    <CButtonGroup>

                                        <CButton size="sm" color="primary"><CIcon icon={cilPen} /></CButton>
                                        <CButton size="sm" color="danger"><CIcon icon={cilTrash} /></CButton>
                                    </CButtonGroup>
                                </CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>


        </CContainer>
    )
}

export default List
